from flask import flask_render_template_request
import pickle
import numpy as np
app = Flask(__name__)

model=pickle.load(open('','rb'))
@app.route('/')
def testing():
    return render_template('index.html')

@app.route('/predict',method=['POST','GET'])
def predict():
    print(request.form)
    int_features[int(x) for x in request.form.values()]
    final=(np.array(int_features))
    print(int_features)
    print(final)
    prediction=model.predict_proba(final)
    output='{0:.{1}f}'.format(prediction[0][1], 2)
    
    if output>str(0.5):
        return render_template('index.html', pred='Your forest is in danger, \nProbability of fire occuring is {}'.format(output))
    else:
        return render_template('index.html', pred='Your forest is safe{}'.format(output))
    
if __name__ == '__main__':
    app.run()