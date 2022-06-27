import json

file = open("assets/dataset.txt", encoding="utf8")

text = file.read()
text = text.split("\n")
text = sorted(text, key=len)

file.close()

qn_dict = {}
count = 0

for i in text:
    if len(i) > 0:
        qn_dict[str(count)] = i
        count = count + 1

file = open("assets/questions.json", "w")

file.write(json.dumps(qn_dict, indent=1))

file.close()
