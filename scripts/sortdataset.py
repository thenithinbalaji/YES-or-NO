file = open("assets/dataset.txt", encoding="utf8")

text = file.read()
text = text.split("\n")
text = sorted(set(text))
text = sorted(text, key=len)

file.close()

file = open("assets/dataset.txt", "w", encoding="utf8")

for question in text:
    if len(question) > 5:
        file.write(question + "\n")

file.close()
