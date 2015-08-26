function spinWords(){
  var sentence = arguments[0].split(' ');
  var spunSentence = ''
  for (word in sentence) {
    if (sentence[word].length < 5) {
      spunSentence += ' ' + sentence[word] + ' '
    } else if (sentence[word].length > 4) {
      spunSentence += ' ' + sentence[word].split('').reverse().join('')
    }  
  }
  return spunSentence.replace(/ {2}/g, ' ').trim();
}

console.log(spinWords("Hey fellow warriors"));