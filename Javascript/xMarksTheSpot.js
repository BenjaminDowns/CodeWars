function x(n) {
  // make the empty matrix
  var matrix = []
  for (var i = 0; i < n; i++) {
  	matrix[i] = [0]
  };

  // fill it in with zeros
  for (var i = 0; i < matrix.length; i++) {
  	for (var j = 0; j < matrix.length; j++) {
  		matrix[i][j] = 0
  	};
  };

  // make top left to bottom right
  for (i = 0; i < n; i++) {
    matrix[i][i] = 1
}

  //make bottom left to top right
  var column = 0
  for (i = n -1; i > -1; i--) {
  	matrix[i][column] = 1
  	column++
  };
  return matrix
}

x(30)