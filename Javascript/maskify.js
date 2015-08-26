function maskify(cc) {
  var end = '';
  var beginning = '';
  if (cc.length < 4) {
    return cc.slice(-cc.length);
  } else {
    end = cc.slice(-4);
    while (beginning.length < cc.length - 4) {
      beginning += '#';
      }
    };
  return beginning + end;
}