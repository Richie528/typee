text = []
with open("text.txt") as f:
    for word in f.readlines():
        text.append(word.strip())
print(text)