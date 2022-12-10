import numpy as np
from flask import Flask, request, jsonify, render_template, session
from flask_paginate import Pagination, get_page_args
from flask_session import Session
from rake_nltk import Rake   # ensure this is installed

import nltk
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import warnings
import pickle
import json

warnings.filterwarnings("ignore")

df= pd.read_excel('rafi_beli_lamborgini_berkalikali_lagi.xlsx')
df.head()

df['ratings'] = df['ratings'].astype('str')

df.drop(
    labels = ['web-scraper-start-url','Unnamed: 0'],
    axis = 1,
    inplace=True
)

df = df.drop_duplicates('job_name')

df = df.dropna()

df['job_name'] = df['job_name'].str.replace('[^\w\s]','')

def list_all(offset=0, per_page=10):
#   return df.to_json()
  return df[offset: offset + per_page].to_json(orient="records")

def detail_job(name):
  data = df[df.job_name.eq(name)]
  return data.to_json(orient="records")

nltk.download('stopwords')
nltk.download('punkt')

df['keyword'] = ''

r = Rake()

for index, row in df.iterrows():
    r.extract_keywords_from_text(row['job_name'])
    key_words_dict_scores = r.get_word_degrees()
    row['keyword'] = list(key_words_dict_scores.keys())

df['Bag_of_words'] = ''
columns = ['keyword']
for index, row in df.iterrows():
    words = ''
    for col in columns:
        words += ' '.join(row[col]) + ' '
    row['Bag_of_words'] = words

df['Bag_of_words'] = df['Bag_of_words'].str.strip().str.replace('   ', ' ').str.replace('  ', ' ')

count = CountVectorizer()
count_matrix = count.fit_transform(df['Bag_of_words'])
cosine_sim = cosine_similarity(count_matrix, count_matrix)

indices = pd.Series(df['job_name'])
indices[:5]

recommended_jobs = []
recommended_jobs_ = []
def recommend(job_name, cosine_sim = cosine_sim):
    idx = indices[indices.isin([job_name])].index[0]
    score_series = pd.Series(cosine_sim[idx]).sort_values(ascending = False)
    top_10_indices = list(score_series.iloc[1:11].index) 

    if len(recommended_jobs) != 0:
        recommended_jobs.clear()
    
    for i in top_10_indices:
        recommended_jobs.append(list(df.job_name)[i]) 
        
    recomended_jobs = pd.DataFrame(
        recommended_jobs,
        columns=['job_name']
        )
    recommended_jobs_ = pd.merge(recomended_jobs, df, on="job_name")

    # recommended_jobs_.drop_duplicates(subset="job_name", keep=False, inplace=True)
        
    return recommended_jobs_.to_json(orient="records")

def search_job(name, offset=0, per_page=10):  
  df['Indexes'] = df['job_name'].str.find(name);
  datanya = df.loc[(df.Indexes > 0)];
  return datanya[offset: offset + per_page].to_json(orient="records")

def filter_(name, offset=0, per_page=10):  
  df['Indexes'] = df['categories'].str.find(name);
  x = df.loc[(df.Indexes == 0)];
  return x[offset: offset + per_page].to_json(orient="records")

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route('/')
def home():
    page = int(request.args.get('page', 1));
    per_page = 5;
    offset = (page - 1) * per_page;
    data = list_all(offset=offset, per_page=per_page);
    jobs = json.loads(data);
    # pagination = Pagination(page=page, per_page=per_page, offset=offset, total=len(df), css_framework='bootstrap4')
    # return render_template('index.html', jobs = jobs, page=page, per_page=per_page, pagination=pagination);
    return render_template('index_2.html',jobs = jobs)

@app.route('/list_alls')
def list_alls():
    page = int(request.args.get('page', 1));
    per_page = 20;
    offset = (page - 1) * per_page;
    data = list_all(offset=offset, per_page=per_page);
    jobs = json.loads(data);
    pagination = Pagination(page=page, per_page=per_page, offset=offset, total=len(df), css_framework='bootstrap4')
    return render_template('index.html', jobs = jobs, page=page, per_page=per_page, pagination=pagination);    

@app.route('/predict',methods=['POST', 'GET'])
def predict():
    if request.method == 'POST':
        parameter = request.form.get('job_name')
        session['job_name'] = parameter
    if 'parameter' in session['job_name']:
        parameter = session['job_name']
    pages = int(request.args.get('page', 1));
    per_page = 20;
    offset = (pages - 1) * per_page;
    data_nya = search_job(name=session['job_name'], offset=offset, per_page=per_page);
    jobs = json.loads(data_nya);
    # return jobs
    print(len(data_nya))
    pagination = Pagination(page=pages, per_page=per_page, total=len(data_nya), css_framework='bootstrap4')
    return render_template('search.html', jobs = jobs, page=pages, per_page=per_page, pagination=pagination);

@app.route('/about')
def about():
    return render_template('about.html');

@app.route('/services/<filter>',methods=['GET'])
def services(filter):
    page = int(request.args.get('page', 1));
    per_page = 20;
    offset = (page - 1) * per_page;
    data = filter_(filter, offset=offset, per_page=per_page);
    jobs = json.loads(data);
    pagination = Pagination(page=page, per_page=per_page, total=len(data), css_framework='bootstrap4')
    return render_template('list_all.html', jobs = jobs, page=page, per_page=per_page, pagination=pagination);

@app.route('/detail/<name>',methods=['GET'])
def detail(name):
    data = detail_job(name);
    data_recommend = recommend(name);
    return render_template('detail.html', output = json.loads(data), output_2 = json.loads(data_recommend));

if __name__ == "__main__":
    app.run(debug=True)
