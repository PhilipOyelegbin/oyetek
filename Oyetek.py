from flask import Flask, render_template, request
from random import shuffle

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about/')
def about():
    return render_template('about.html')


@app.route('/services/')
def services():
    return render_template('services.html')

@app.route('/projects/')
def projects():
    return render_template('projects.html')


@app.route('/generate', methods=["POST", "GET"])
def generate():
    if request.method == "POST":
        name = request.form['Name']
        mobile = request.form['Mobile']
        shuffle(list(name))
        user = name[2] + name[0] + name[5]
        shuffle(list(mobile))
        num = mobile[8] + mobile[3]
        char = ['~', '@', '$', '%', '_', '?', '*', "'"]
        shuffle(char)
        character = char[0]
        password = user + character + num
        return render_template('projects.html', pwd=password)


if __name__ == '__main__':
    app.run(debug=False)
