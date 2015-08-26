function anyArrows(arrows){
  return arrows.some(function(arrow) {
    return !(arrow.damaged);
  });
}