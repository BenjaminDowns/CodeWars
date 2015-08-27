function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
}

filterWords("You're Bad! timmy!"),"You're awesome! timmy!");