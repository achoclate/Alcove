from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from React frontend
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    contact_messages = db.relationship('ContactMessage', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'

# ContactMessage model
class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<ContactMessage {self.name}>'

# Reservation model
class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    guest_count = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(10), nullable=False)
    time = db.Column(db.String(5), nullable=False)

    def __repr__(self):
        return f'<Reservation {self.id}>'

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    hashed_password = generate_password_hash(password, method='sha256')
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
    user_id = data.get('user_id')  # Assuming user ID is provided

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
    return jsonify([{'guest_count': r.guest_count, 'date': r.date, 'time': r.time} for r in reservations])

if __name__ == '__main__':
    app.run(debug=True)
