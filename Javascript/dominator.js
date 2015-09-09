function dominator(arr) {
	var dominator = -1
	var dictionary = {}
	var arrDict = arr.reduce(function(prev,next) {
		prev[next] = prev[next] + 1 || 1
		return dictionary
	}, dictionary)
	for (num in arrDict) {
		if (arrDict.hasOwnProperty(num)) {
			if (arrDict[num] > arr.length/2) {
				dominator = parseInt(num)
			}
		}	
	}	
	return dominator
}

// array = [1,2,3,4,5]
// array = [1,1,1,2,2,2]
array = [1,1,1,2,2,2,2]
console.log(dominator(array))