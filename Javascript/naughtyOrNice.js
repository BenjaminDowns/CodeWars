function naughtyOrNice(year) {
  var nice = 0;
  var naughty = 0;
  for (var month in year) {
    var day = year[month]
    for (var behavior in day) {
      day[behavior] === "Nice" ? nice++ : naughty++
    }
  }
  return nice > naughty? "Nice" : "Naughty"
}