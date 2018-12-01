from flask import Flask
from flask import request
from flask import send_file
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route("/")
def main():
    return "Testing from news visualizer API"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get('PORT', 5000)))
