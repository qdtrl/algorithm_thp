const algo = (array) => {
  if (array.length === 0) { return array; }
  console.log(Math.max(...array));
  return algo(array.slice(array.lastIndexOf(Math.max(...array)) + 1, array.length));
}

algo([3,7,8,3,5,1,10,3,7,8,3,5,1]);
