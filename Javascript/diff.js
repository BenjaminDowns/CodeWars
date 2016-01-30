// With sort function enabled
function diffBig2(arr) {
  var sorted = arr.sort(function(a,b) {return b-a})
  return sorted[0] - sorted[1]
}

diffBig2([8, 3, 1])


// with sort function disabled
function diffBig2(arr) {
  var max = Math.max(...arr)
  arr.splice(arr.indexOf(max), 1)
  return max - Math.max(...arr)
}