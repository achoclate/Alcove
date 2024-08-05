from flask_marshmallow import Marshmallow
from models import User, Meal, Menu, Order, Notification, MenuItem

ma = Marshmallow()

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

    meal = ma.Nested('MealSchema')  # Include meal details

class MenuSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Menu

    meals = ma.Nested('MenuItemSchema', many=True)  # Include menu items

class OrderSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Order

class NotificationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Notification
