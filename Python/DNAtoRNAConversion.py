import re

def DNAtoRNA(dna):
    dna = re.sub('[T]', "U", dna)
    return dna
