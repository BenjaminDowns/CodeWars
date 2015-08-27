let narcissistic = (value) => {
  numLength = value.toString().length
  var valueArray = value.toString().split('')
  var newValue = 0
  valueArray.forEach((a) => newValue += a**numLength)
  if (numLength == 1) {
    return true 
  } else if (newValue == value) {
    return true
  } else {
    return false
  }
}

// describe( "Narcissistic Function", function() {
//   it( "should find small numbers are all narcissistic", function() {
//     Test.expect( narcissistic( 7 ), "7 is narcissistic" );
//   });
  
//   it( "should find these numbers are narcissistic", function() {
//     Test.expect( narcissistic( 371 ), "371 is narcissistic" );
//   });
// });