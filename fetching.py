import requests
import json

url = "https://fakeid.vercel.app/api/Gender/random/NameSet/ar/Country/as"

data = []

for i in range(0,30):
    temp = requests.get(url).json();
    data.append({
        "id":i+1,
        "name":temp["data"]["Name"],
        "ville":temp["data"]["Address"].split(" ")[-1],
        "tel":"".join(temp["data"]["Details"]["Phone"].split(" "))
        })
    
with open("data.json","w") as f:
    f.write(json.dumps(data))