from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/manifest.json')
def manifest():
    return send_from_directory('.', 'manifest.json')

@app.route('/static/icons/<path:filename>')
def icons(filename):
    return send_from_directory('static/icons', filename)

if __name__ == '__main__':
    app.run(debug=True)
