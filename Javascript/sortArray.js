var sortArray = function(value) {
  return value.split('').sort((c, p) => c > p ).join('');
}

sortArray('12345')
sortArray('34251')