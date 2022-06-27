import json
import random

file = open("assets/questions.json")

data = file.read()
data = json.loads(data)

file.close()

ans_dict = {}

for i in data.keys():
    ans_dict[i] = random.randint(20, 85)

file = open("assets/answers.json", "w")
json.dump(ans_dict, file)
file.close()
