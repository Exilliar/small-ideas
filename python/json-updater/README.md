# Json Updater

A simple python script to mass update json file values to a new set value

## How to use

1. Move the json file that is to be updated into the directory that this script is saved in
2. Run the script using `python3 update.py` (or just `python` if using windows)
3. Input the name of the json file that is to be updated
4. Input the field names of the json fields that need to be changed and their values
5. The updated json will be outputted into `output.json`

## Qualifiers

This script was made for a single purpose and is very basic.

There is no error handling, if the supplied values are not in the json file, then it will likely fail.

It also assumes that the new values to set the fields to are integers, it may be updated later to include other types, but this is unlikely
