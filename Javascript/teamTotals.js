function calculateTotal(team1, team2) {
  if(team1.length == 0) return false;
  else if (team2.length == 0) return true;
  else {
    var t1average = team1.reduce((total, game) => total + game)/team1.length
    var t2average = team2.reduce((total, game) => total + game)/team2.length
    return t1average > t2average;
  }
}