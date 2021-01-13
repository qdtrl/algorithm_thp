const algo = (array, k) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === k) {
        return true;
      }
    }
  }
  return false;
}

const array = [1, 8, 10, 21];
console.log(algo(array, 19));