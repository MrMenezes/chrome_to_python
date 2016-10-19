from flask import Flask, jsonify, request
import json
import numpy as np
import cv2
app = Flask(__name__)

app.config['DEBUG'] = True


@app.route('/pixels/', methods=['POST'])
def post_balance():
    myjson = json.dumps(json.loads(request.data.decode()))
    load_json = json.loads(myjson)
    array = np.array(load_json['array'])
    width = int(load_json['width'])
    height = int(load_json['height'])    
    shape = (width, height, 4)
    array2 = array.reshape(shape)
    print(array2)
    
    return str(array2)

if __name__ == "__main__":
    app.run()


