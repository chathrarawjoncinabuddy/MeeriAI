from flask import Flask, render_template, request, jsonify
from deepstream.iris_scanner import IrisScanner

app = Flask(__name__)
iris_scanner = IrisScanner()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_scan', methods=['POST'])
def start_scan():
    try:
        result = iris_scanner.process_frame()
        return jsonify({"success": True, "data": result})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
