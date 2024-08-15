from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import os
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from React frontend

# Configure the database and upload folder
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'  # Directory to save uploaded files

# Initialize database and migration
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Ensure the upload directory exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Define models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    contact_messages = db.relationship('ContactMessage', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'

class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<ContactMessage {self.name}>'

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    guest_count = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(10), nullable=False)
    time = db.Column(db.String(5), nullable=False)

    def __repr__(self):
        return f'<Reservation {self.id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'guest_count': self.guest_count,
            'date': self.date,
            'time': self.time
        }

class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))  # To store image URL

    def __repr__(self):
        return f'<Food {self.name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'price': self.price,
            'image_url': self.image_url
        }

# Define routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email, password=hashed_password)
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Username or email already exists'}), 409

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Missing fields'}), 400

    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    user_id = data.get('user_id')

    if not name or not email or not message:
        return jsonify({'message': 'Missing fields'}), 400

    new_message = ContactMessage(name=name, email=email, message=message, user_id=user_id)
    try:
        db.session.add(new_message)
        db.session.commit()
        return jsonify({'message': 'Message sent successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Error saving message'}), 500

@app.route('/contact_messages', methods=['GET'])
def get_contact_messages():
    messages = ContactMessage.query.all()
    return jsonify([{
        'id': msg.id,
        'name': msg.name,
        'email': msg.email,
        'message': msg.message
    } for msg in messages]), 200

@app.route('/reservations', methods=['POST'])
def create_reservation():
    data = request.get_json()
    guest_count = data.get('guest_count')
    date = data.get('date')
    time = data.get('time')

    if not guest_count or not date or not time:
        return jsonify({'message': 'Missing fields'}), 400

    new_reservation = Reservation(guest_count=guest_count, date=date, time=time)
    try:
        db.session.add(new_reservation)
        db.session.commit()
        return jsonify({'message': 'Reservation created successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Error creating reservation'}), 500

@app.route('/reservations', methods=['GET'])
def get_reservations():
    reservations = Reservation.query.all()
    return jsonify([res.to_dict() for res in reservations]), 200

@app.route('/foods', methods=['POST'])
def add_food():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    image_url = f'/uploads/{filename}'

    name = request.form.get('name')
    category = request.form.get('category')
    price = request.form.get('price')

    if not name or not category or not price:
        return jsonify({'message': 'Missing fields'}), 400

    new_food = Food(name=name, category=category, price=float(price), image_url=image_url)
    try:
        db.session.add(new_food)
        db.session.commit()
        return jsonify({'message': 'Food item added successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Error adding food item'}), 500

@app.route('/foods', methods=['GET'])
def get_foods():
    foods = Food.query.all()
    return jsonify([food.to_dict() for food in foods]), 200

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'username': user.username,
        'email': user.email
    } for user in users]), 200

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
