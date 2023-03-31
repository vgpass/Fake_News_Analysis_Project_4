from flask import Flask, redirect, url_for, render_template, send_from_directory
app = Flask(__name__)
@app.route("/")
def welcome():
    return render_template("home.html")
@app.route("/home")
def home():
    return render_template("home.html")
@app.route("/home.html")
def homeHTML():
    return render_template("home.html")
@app.route("/common")
def common():
    return render_template("common.html")
@app.route("/common.html")
def commonHTML():
    return render_template("common.html")
@app.route("/articles")
def articles():
    return render_template("articles.html")
@app.route("/articles.html")
def articlesHTML():
    return render_template("articles.html")
@app.route("/resources")
def resources():
    return render_template("resources.html")
@app.route("/resources.html")
def resourcesHTML():
    return render_template("resources.html")
@app.route("/results1")
def results1():
    return render_template("results1.html")
@app.route("/results1.html")
def results1HTML():
    return render_template("results1.html")
@app.route("/results2")
def results2():
    return render_template("results2.html")
@app.route("/results2.html")
def results2HTML():
    return render_template("results2.html")
@app.route("/results3")
def results3():
    return render_template("results3.html")
@app.route("/results3.html")
def results3HTML():
    return render_template("results3.html")
if __name__ == "__main__":
    app.run()