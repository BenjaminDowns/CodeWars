function XO(str) {
  var Exes = str.match(/x/ig)
  var Ohs = str.match(/o/ig)
  if (!Exes || !Ohs) {
    return false
  } else {
    return Exes.length == Ohs.length
  }
}

console.log(XO('xo')) // true
console.log(XO("xxOo")) // true
console.log(XO("xxxm")) // false
console.log(XO("Oo")) // false
console.log(XO("ooom")) //false