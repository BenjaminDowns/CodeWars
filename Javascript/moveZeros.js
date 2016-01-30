var moveZeros = function(arr) {
  let rearranged = arr.filter(function(x) { return x !== 0 })
  let missingZeroes = Array(arr.length-rearranged.length + 1).join(0).split('').map(Number)
  return rearranged.concat(missingZeroes)
}