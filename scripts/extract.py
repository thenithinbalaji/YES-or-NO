import json

text = open("assets/dataset.txt", encoding="utf8").read()
text = text.split('\n')
text.sort()

dict = {}
count = 0

for i in text:
    if len(i) > 3:
        dict[str(count)] = i
        count = count + 1

print(json.dumps(dict, indent=2))