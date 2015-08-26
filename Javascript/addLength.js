function addLength(str){
  var arrString = str.split(' ');
  for (word in arrString) {
    arrString[word] += " " + arrString[word].length
  }
  return arrString
}