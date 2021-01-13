const algo = (array, k) => {
  if (array.length === 1) {
    return false
  }
  let diff = k - array[0];
  let element = array.slice(1).find(e => diff === e)
  
  if (element === diff){
    return true;
  }

  return algo(array.slice(1), k);
}

const array = [1, 8, 10, 21];
console.log(algo(array, 22));