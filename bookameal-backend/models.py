from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


# Initialize SQLAlchemy and Marshmallow
db = SQLAlchemy()
ma = Marshmallow()

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    
    def __repr__(self):
        return f'<Admin {self.email}>'

class User(db.Model):
    """User model for authentication and profile management."""
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"<User {self.email}>"

class Profile(db.Model):
    """Profile model for additional user details."""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)
    bio = db.Column(db.String(500), nullable=True)
    profile_picture = db.Column(db.String(255), nullable=True)
    preferences = db.Column(db.Text, nullable=True)
    
    user = db.relationship('User', backref=db.backref('profile', uselist=False))

    def __repr__(self):
        return f"<Profile {self.user_id}>"

class Meal(db.Model):
    """Meal model for storing meal details."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)

    category = db.relationship('Category', backref=db.backref('meals', lazy=True))

    def __repr__(self):
        return f"<Meal {self.name}>"

class Category(db.Model):
    """Category model for classifying meals."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=True)
    
    def __repr__(self):
        return f"<Category {self.name}>"

class Order(db.Model):
    """Order model for storing meal orders."""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    meal_id = db.Column(db.Integer, db.ForeignKey('meal.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    order_date = db.Column(db.DateTime, default=db.func.now())
    
    user = db.relationship('User', backref=db.backref('orders', lazy=True))
    meal = db.relationship('Meal', backref=db.backref('orders', lazy=True))

    def __repr__(self):
        return f"<Order {self.id} for Meal {self.meal_id}>"

class Review(db.Model):
    """Review model for meal reviews and ratings."""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    meal_id = db.Column(db.Integer, db.ForeignKey('meal.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  # Rating out of 5
    comment = db.Column(db.Text, nullable=True)
    review_date = db.Column(db.DateTime, default=db.func.now())
    
    user = db.relationship('User', backref=db.backref('reviews', lazy=True))
    meal = db.relationship('Meal', backref=db.backref('reviews', lazy=True))

    def __repr__(self):
        return f"<Review {self.id} by User {self.user_id}>"

class Tag(db.Model):
    """Tag model for categorizing meals with tags."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    
    def __repr__(self):
        return f"<Tag {self.name}>"

# Association table for many-to-many relationship between Meal and Tag
meal_tag = db.Table('meal_tag',
    db.Column('meal_id', db.Integer, db.ForeignKey('meal.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True)
)