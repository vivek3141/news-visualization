from flask import Flask
from flask import request
import get
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route("/")
def main():
    topic = request.args.get('topic')
    articles = get.get_news(topic)
    return "<br>".join(articles)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get('PORT', 5000)))
