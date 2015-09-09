function oddOneOut(str) {
	var finalArray = []
	var dictionary = {}
	var strDict = str.split('').reduce(function(prev, next) {
		prev[next] = prev[next] + 1 || 1
		return dictionary
	}, dictionary)
	for (var letter in strDict) {
		if (strDict.hasOwnProperty(letter)) {
			if (strDict[letter] == 1) {
				finalArray.push(letter)
			}
		}
	}
	return finalArray
}

oddOneOut("weefgew")