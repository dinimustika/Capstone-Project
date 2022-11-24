import requests
url = 'http://localhost:5000/api'
r = requests.post(url,json={'job_name':"You will get High quality Character design"})
print(r.json())