import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///book_a_meal.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_secret_key'

    # # Add your payment API keys and settings here
    # MPESA_CONSUMER_KEY = os.environ.get('MPESA_CONSUMER_KEY')
    # MPESA_CONSUMER_SECRET = os.environ.get('MPESA_CONSUMER_SECRET')
    # PAYPAL_CLIENT_ID = os.environ.get('PAYPAL_CLIENT_ID')
    # PAYPAL_CLIENT_SECRET = os.environ.get('PAYPAL_CLIENT_SECRET')
