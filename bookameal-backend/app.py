from datetime import datetime
from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
import jwt
import os
from functools import wraps

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allows requests from any origin
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book_a_meal.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

# Secret key for JWT encoding/decoding
app.config['SECRET_KEY'] = 'your_secret_key_here'  # Change this to a strong key in production

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    orders = db.relationship('Order', backref='user', lazy=True)
    notifications = db.relationship('Notification', backref='user', lazy=True)

class Meal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    orders = db.relationship('Order', backref='meal', lazy=True)

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    meals = db.relationship('MenuItem', backref='menu', lazy=True)

class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)
    meal_id = db.Column(db.Integer, db.ForeignKey('meal.id'), nullable=False)
    meal = db.relationship('Meal')

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    meal_id = db.Column(db.Integer, db.ForeignKey('meal.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Schemas
class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class MealSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Meal

class MenuItemSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = MenuItem
        include_fk = True

class MenuSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Menu

    meals = ma.Nested(MenuItemSchema, many=True)  # Include menu items

class OrderSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Order

class NotificationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Notification

# Helper function to verify JWT token
def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 403
        try:
            jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 403
        return f(*args, **kwargs)
    return decorator

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        token = jwt.encode({'user_id': user.id}, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

# User Routes
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify(UserSchema(many=True).dump(users))

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(UserSchema().dump(user))

@app.route('/users', methods=['POST'])
def create_user():
    email = request.json.get('email')
    password = request.json.get('password')
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(UserSchema().dump(new_user)), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    email = request.json.get('email', user.email)
    password = request.json.get('password')
    if password:
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user.password = hashed_password
    user.email = email
    db.session.commit()
    return jsonify(UserSchema().dump(user))

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted'})

# Meal Routes
@app.route('/meals', methods=['GET'])
def get_meals():
    meals = Meal.query.all()
    return jsonify(MealSchema(many=True).dump(meals))

@app.route('/meals/<int:meal_id>', methods=['GET'])
def get_meal(meal_id):
    meal = Meal.query.get_or_404(meal_id)
    return jsonify(MealSchema().dump(meal))

@app.route('/meals', methods=['POST'])
def create_meal():
    name = request.json.get('name')
    description = request.json.get('description')
    new_meal = Meal(name=name, description=description)
    db.session.add(new_meal)
    db.session.commit()
    return jsonify(MealSchema().dump(new_meal)), 201

@app.route('/meals/<int:meal_id>', methods=['PUT'])
def update_meal(meal_id):
    meal = Meal.query.get_or_404(meal_id)
    meal.name = request.json.get('name', meal.name)
    meal.description = request.json.get('description', meal.description)
    db.session.commit()
    return jsonify(MealSchema().dump(meal))

@app.route('/meals/<int:meal_id>', methods=['DELETE'])
def delete_meal(meal_id):
    meal = Meal.query.get_or_404(meal_id)
    db.session.delete(meal)
    db.session.commit()
    return jsonify({'message': 'Meal deleted'})

# Menu Routes
@app.route('/menus', methods=['GET'])
def get_menus():
    menus = Menu.query.all()
    return jsonify(MenuSchema(many=True).dump(menus))

@app.route('/menus/<int:menu_id>', methods=['GET'])
def get_menu(menu_id):
    menu = Menu.query.get_or_404(menu_id)
    return jsonify(MenuSchema().dump(menu))

@app.route('/menus', methods=['POST'])
def create_menu():
    date = request.json.get('date')
    new_menu = Menu(date=datetime.strptime(date, '%Y-%m-%d').date())
    db.session.add(new_menu)
    db.session.commit()
    return jsonify(MenuSchema().dump(new_menu)), 201

@app.route('/menus/<int:menu_id>', methods=['PUT'])
def update_menu(menu_id):
    menu = Menu.query.get_or_404(menu_id)
    menu.date = request.json.get('date', menu.date)
    db.session.commit()
    return jsonify(MenuSchema().dump(menu))

@app.route('/menus/<int:menu_id>', methods=['DELETE'])
def delete_menu(menu_id):
    menu = Menu.query.get_or_404(menu_id)
    db.session.delete(menu)
    db.session.commit()
    return jsonify({'message': 'Menu deleted'})

# Order Routes
@app.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify(OrderSchema(many=True).dump(orders))

@app.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    order = Order.query.get_or_404(order_id)
    return jsonify(OrderSchema().dump(order))

@app.route('/orders', methods=['POST'])
def create_order():
    user_id = request.json.get('user_id')
    meal_id = request.json.get('meal_id')
    new_order = Order(user_id=user_id, meal_id=meal_id)
    db.session.add(new_order)
    db.session.commit()
    return jsonify(OrderSchema().dump(new_order)), 201

@app.route('/orders/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    order = Order.query.get_or_404(order_id)
    order.user_id = request.json.get('user_id', order.user_id)
    order.meal_id = request.json.get('meal_id', order.meal_id)
    db.session.commit()
    return jsonify(OrderSchema().dump(order))

@app.route('/orders/<int:order_id>', methods=['DELETE'])
def delete_order(order_id):
    order = Order.query.get_or_404(order_id)
    db.session.delete(order)
    db.session.commit()
    return jsonify({'message': 'Order deleted'})

# Notification Routes
@app.route('/notifications', methods=['GET'])
def get_notifications():
    notifications = Notification.query.all()
    return jsonify(NotificationSchema(many=True).dump(notifications))

@app.route('/notifications/<int:notification_id>', methods=['GET'])
def get_notification(notification_id):
    notification = Notification.query.get_or_404(notification_id)
    return jsonify(NotificationSchema().dump(notification))

@app.route('/notifications', methods=['POST'])
def create_notification():
    user_id = request.json.get('user_id')
    message = request.json.get('message')
    new_notification = Notification(user_id=user_id, message=message)
    db.session.add(new_notification)
    db.session.commit()
    return jsonify(NotificationSchema().dump(new_notification)), 201

@app.route('/notifications/<int:notification_id>', methods=['PUT'])
def update_notification(notification_id):
    notification = Notification.query.get_or_404(notification_id)
    notification.message = request.json.get('message', notification.message)
    db.session.commit()
    return jsonify(NotificationSchema().dump(notification))

@app.route('/notifications/<int:notification_id>', methods=['DELETE'])
def delete_notification(notification_id):
    notification = Notification.query.get_or_404(notification_id)
    db.session.delete(notification)
    db.session.commit()
    return jsonify({'message': 'Notification deleted'})

# Admin Routes
@app.route('/admin', methods=['GET'])
def admin_dashboard():
    return render_template('landing.html')

@app.route('/admin/orders', methods=['GET'])
def admin_orders():
    try:
        orders = Order.query.all()
        return render_template('admin_orders.html', orders=orders)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/revenue', methods=['GET'])
def admin_revenue():
    try:
        orders = Order.query.all()
        revenue = len(orders) * 10  # Assuming each order is worth $10 for simplicity
        return render_template('admin_revenue.html', revenue=revenue)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/meals', methods=['GET'])
def admin_meals():
    try:
        meals = Meal.query.all()
        return render_template('admin_meals.html', meals=meals)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/users', methods=['GET'])
def admin_users():
    try:
        users = User.query.all()
        return render_template('admin_users.html', users=users)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/menus', methods=['GET'])
def admin_menus():
    try:
        menus = Menu.query.all()
        return render_template('admin_menus.html', menus=menus)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/notifications', methods=['GET'])
def admin_notifications():
    try:
        notifications = Notification.query.all()
        return render_template('admin_notifications.html', notifications=notifications)
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/admin/settings', methods=['GET'])
def admin_settings():
    return render_template('admin_settings.html')

# Root Route
@app.route('/')
def index():
    return render_template('landing.html')

if __name__ == '__main__':
    app.run(debug=True)
