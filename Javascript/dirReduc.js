const dirReduc = (arr) => {

  const neighbors = { 
  'NORTH': 'SOUTH',
  'SOUTH': 'NORTH',
  'EAST': 'WEST',
  'WEST': 'EAST'
  }
  
  let i = 0 
  
  while (i < arr.length) {
    if (arr[i+1] === neighbors[arr[i]]) {
       arr.splice(i, 2);
       i = 0
    } else {
      i++
    }
  }
  
  return arr
  
}