function smaller(nums) {
  for (var i = 0; i < nums.length; i++) {
  	var newValue = 0
    var current = nums[i]
    for (var j = i+1; j < nums.length; j++) {
      var next = nums[j]
      if (current > next) {
        newValue++
        console.log(current + " " + next + " " + newValue)
      }
    }
    nums.splice(i, 1, newValue)
  }
  return nums
}

var myArray = [5, 4, 3, 2, 1]
var myArray2 = []

var result = smaller(myArray)

console.log(result)