from flask import Flask #, redirect, url_for, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/', methods=['POST', 'GET'])
def main():
    return {'res': True, 'data': '2'}

# main driver function
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)