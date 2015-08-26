function scrabbleScore(str){
  var score = 0;
  var trimmedStr = str.replace(/ /g, '');
  for (letter in trimmedStr) {  
    score += $dict[trimmedStr[letter].toUpperCase()];
  }
  return score;
}