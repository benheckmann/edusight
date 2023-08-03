from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_login import (
    LoginManager,
    UserMixin,
    login_user,
    logout_user,
    login_required,
    current_user,
)
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

load_dotenv()  # take environment variables from .env.

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# configuration
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

# extensions
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"


class User(UserMixin):
    def __init__(self, email, password, _id=None):
        self._id = _id
        self.email = email
        self.password = password


@login_manager.user_loader
def load_user(user_id):
    user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return None
    return User(user["email"], user["password"], str(user["_id"]))


@app.route("/")
@login_required
def hello_world():
    return jsonify(message="Hello, World!")


@app.route("/register", methods=["POST"])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    mongo.db.users.insert_one({"email": email, "password": hashed_password})

    return jsonify(message="User registered."), 201


@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = mongo.db.users.find_one({"email": email})

    if not user or not bcrypt.check_password_hash(user["password"], password):
        return jsonify(message="Invalid email or password."), 401

    user_obj = User(user["email"], user["password"], str(user["_id"]))
    login_user(user_obj)

    return jsonify(message="Logged in successfully."), 200


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return jsonify(message="Logged out successfully."), 200


@app.route("/reset_password", methods=["POST"])
@login_required
def reset_password():
    old_password = request.json.get("old_password", None)
    new_password = request.json.get("new_password", None)
    user = mongo.db.users.find_one({"_id": ObjectId(current_user.get_id())})

    if not bcrypt.check_password_hash(user["password"], old_password):
        return jsonify(message="Old password is incorrect."), 401

    hashed_new_password = bcrypt.generate_password_hash(new_password).decode("utf8")
    mongo.db.users.update_one(
        {"_id": ObjectId(current_user.get_id())},
        {"$set": {"password": hashed_new_password}},
    )

    return jsonify(message="Password reset successful."), 200
