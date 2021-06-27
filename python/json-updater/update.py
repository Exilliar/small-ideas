import json

# Get values to change
jsonFile = input("Name of json file: ")
numValues = int(input("How many values to change: "))
values = []

for i in range(0, numValues):
    name = input("Value " + str(i) + " name: ")
    changeTo = int(input("Value " + str(i) + " new value: "))
    print("")

    values.append([name, changeTo])

# Get current json
a_file = open(jsonFile, "r")
json_object = json.load(a_file)
a_file.close()

# Update values
for j in json_object:
    for v in values:
        j[v[0]] = v[1]

# Save new values
a_file = open("output.json", "w")
json.dump(json_object, a_file)
a_file.close()