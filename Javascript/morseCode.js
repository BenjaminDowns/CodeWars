function encryption(message) {
  var morseCode = ''
  for (letter in message) {
    morseCode += CHAR_TO_MORSE[message[letter]]
  }
  return morseCode;
}

console.log(encryption("HELLO WORLD"))