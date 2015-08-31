function isPronic(n) {
  if (n == 0) { return true }
  var i = 0
  var j = 1
  while (i < n) {
    if (i * j != n) {
      i++
      j++
    } else {
      return true
    }
  }
  return false
}

console.log(isPronic(20))