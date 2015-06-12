import collections

def is_anagram(test, original):
    d1 = collections.defaultdict(int)
    for c in test.lower():
        d1[c] += 1
    d2 = collections.defaultdict(int)
    for c in original.lower():
        d2[c] += 1
    if d1 == d2:
        print "The word {0} is an anagram of {1}".format(test, original)
        return True
    else:
        print "Sorry."