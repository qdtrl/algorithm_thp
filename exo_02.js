const algo = (array, number) => {
  if (array.length == 1) {
      return false;
  }
  for(let i = 1; i < array.length  ; i++){
      if (number == array[0] + array[i]) {
          return true;
      }
  }
  return algo(array.slice(1), number);
};

const array = [1, 8, 10, 21];
console.log(algo(array, 9));