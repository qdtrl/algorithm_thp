const algo = array => {
  while(0 !== array.length) {
    console.log(Math.max(...array));
    array = array.splice(array.lastIndexOf(Math.max(...array)) + 1, array.length)
  }
}
algo([3,7,8,3,5,1,10,3,7,8,3,5,1]);
