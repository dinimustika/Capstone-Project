from flask import Flask, render_template, request
import pickle
import numpy as np
import sklearn
from sklearn import svm

model = pickle.load(open('model.pkl','rb'))
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommmend_seller',methods=['post'])
def fiver_recom():
    user_input = request.form.get('user_input')
    
    return str(user_input)


if __name__ == '__main__':
    app.run(debug=True)