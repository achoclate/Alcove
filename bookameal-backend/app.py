# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///admins.db'  # Update with your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    guests = db.Column(db.Integer, nullable=False)

# Routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')
    
    # Validate input
    if not email or not password or not confirm_password:
        return jsonify({"message": "All fields are required!"}), 400

    if password != confirm_password:
        return jsonify({"message": "Passwords do not match!"}), 400
    
    # Check if email already exists
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered!"}), 400
    
    # Create new user
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Error creating user: {str(e)}"}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Validate input
    if not email or not password:
        return jsonify({"message": "Email and password are required!"}), 400
    
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid credentials!"}), 401

@app.route('/update-profile', methods=['POST'])
def update_profile():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found!"}), 404

    if password:
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user.password = hashed_password

    if email:
        user.email = email

    try:
        db.session.commit()
        return jsonify({"message": "Profile updated successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Error updating profile: {str(e)}"}), 500

@app.route('/logout', methods=['POST'])
def logout():
    return jsonify({"message": "Logged out successfully!"}), 200

# New Route for Creating a Reservation
@app.route('/reservations', methods=['POST'])
def create_reservation():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    date = data.get('date')
    time = data.get('time')
    guests = data.get('guests')

    if not name or not email or not phone or not date or not time or not guests:
        return jsonify({"message": "All fields are required!"}), 400

    new_reservation = Reservation(
        name=name, email=email, phone=phone, date=date, time=time, guests=guests
    )

    try:
        db.session.add(new_reservation)
        db.session.commit()
        return jsonify({"message": "Reservation created successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Error creating reservation: {str(e)}"}), 500

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
