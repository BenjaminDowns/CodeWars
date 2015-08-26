__author__ = 'benjamindowns'

def gimme(inputArray):
    for i in inputArray:
        if i != (min(inputArray)) and i != (max(inputArray)):
            return inputArray.index(i)