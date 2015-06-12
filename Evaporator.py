__author__ = 'benjamindowns'

def evaporator(content, evap_per_day, threshold):
    content = float(content)
    evap_per_day = float(evap_per_day)
    threshold = float(threshold)
    days = 0
    still_enough = content * (threshold/100)
    while content > still_enough:
        content -= (evap_per_day/100 * content)
        days += 1
    return days

evaporator(10, 10, 10)

