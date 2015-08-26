function calculateTotal(team1, team2) {
  var t1s, t2s;
  if(team1.length < 0) {
    return false
  } else if (team2.length < 0) {
    return true
  } else {  
  t1s = team1.reduce(function (previousValue, currentValue) {return previousValue + currentValue})/team1.length
  t2s = team2.reduce(function (previousValue, currentValue) {return previousValue + currentValue})/team2.length
  return t1s > t2s;
  }
}