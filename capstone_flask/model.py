from rake_nltk import Rake   # ensure this is installed

import nltk
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import warnings
import pickle
warnings.filterwarnings("ignore")

df= pd.read_excel('upworkk.xlsx')
df.head()

df['rating'] = df['rating'].astype('str')

df.drop(
    labels = ['web-scraper-start-url','categories-href','ratings'],
    axis = 1,
    inplace=True
)

# data overview
print('Rows x Columns : ', df.shape[0], 'x', df.shape[1])
print('Features: ', df.columns.tolist())
print('\nUnique values:')
print(df.nunique())
for col in df.columns:
    print(col, end=': ')
    print(df[col].unique())

# type of entries, how many missing values/null fields
df.info()
print('\nMissing values:  ', df.isna().sum().values.sum())
df.isna().sum()

df = df.dropna()

df['categories'].value_counts()[0:10].plot(kind='barh', figsize=[8,5], fontsize=15, color='navy').invert_yaxis()

df['job_name'] = df['job_name'].str.replace('[^\w\s]','')

nltk.download('stopwords')
nltk.download('punkt')

df['keyword'] = ''

r = Rake()

for index, row in df.iterrows():
    r.extract_keywords_from_text(row['job_name'])
    key_words_dict_scores = r.get_word_degrees()
    row['keyword'] = list(key_words_dict_scores.keys())

df

df['Bag_of_words'] = ''
columns = ['keyword']
for index, row in df.iterrows():
    words = ''
    for col in columns:
        words += ' '.join(row[col]) + ' '
    row['Bag_of_words'] = words

df['Bag_of_words'] = df['Bag_of_words'].str.strip().str.replace('   ', ' ').str.replace('  ', ' ')

df

count = CountVectorizer()
count_matrix = count.fit_transform(df['Bag_of_words'])
cosine_sim = cosine_similarity(count_matrix, count_matrix)
print(cosine_sim)

indices = pd.Series(df['job_name'])
indices[:5]

recommended_jobs = []
recommended_jobs_ = []
def recommend(job_name, cosine_sim = cosine_sim):
    idx = indices[indices.isin([job_name])].index[0]
    score_series = pd.Series(cosine_sim[idx]).sort_values(ascending = False)
    top_10_indices = list(score_series.iloc[1:11].index)    
    
    for i in top_10_indices:
        recommended_jobs.append(list(df.job_name)[i])
        
    recomended_jobs = pd.DataFrame(
        recommended_jobs,
        columns=['job_name']
        )
    recommended_jobs_ = pd.merge(recomended_jobs, df, on="job_name")
    # print(recommended_jobs_)
    return recommended_jobs_

print(recommend('You will get High quality Character design'))
