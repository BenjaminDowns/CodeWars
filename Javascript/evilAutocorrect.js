// NOTE YET SOLVED, BUT CAN'T FIND THE ERROR! //

function autocorrect(input){
  return input.replace(/^(yo[u]+)(\s)?/gi, "your sister$2") //takes care of first in line
          	.replace(/^(\W)?(u)(\W)/gi, "$1your sister$3") //takes care of first line
          	.replace(/(\W)(u)(\W)/gi, "$1your sister$3")
  			.replace(/(\W)(yo[u]+)(\W)/gi, "$1your sister$3")
          	.replace(/(\W)(yo[u]+)$/gi, "$1your sister")
          	.replace(/^(\W)?(u)$/gi, "$1your sister") // only thing in message
}

console.log(autocorrect(" yOu"))
console.log(autocorrect("U"))
console.log(autocorrect(" You "))
console.log(autocorrect(" U "))
console.log(autocorrect("yOu "))
console.log(autocorrect("  yOUuu"))
console.log(autocorrect("  Youuu   "))

console.log(autocorrect("\n\nyoutube. youtube? bayouuuu bayou? bayou! youtube. your yours"))
