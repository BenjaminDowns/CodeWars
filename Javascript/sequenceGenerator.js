function* sequenceGen(){
  var sequence = []
  for (value in arguments) {
    sequence.push(arguments[value])
  }
  var originalLength = sequence.length
  var index = 0
  while (sequence) {
    sequence.push(sequence.slice(sequence.length-originalLength).reduce(function(x,y) { return x+y }))
    yield sequence[index]
    index++
  }
}

