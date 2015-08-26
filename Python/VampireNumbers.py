# In retrospect, this is a bit clunky. Other solutions are 2-liners.

def vampire_test(x, y):
    # Sort out double negatives.
    if x < 0 and y < 0:
        return False
    # Main test
    else:
        q = abs(x) * abs(y)
        if sorted(str(abs(x)) + str(abs(y))) == sorted(str(abs(q))):
            return True
        else:
            return False
