const algo = (array) => {
  let westView = [0];
  let i = 0;
  let maxSize = 0;
  while (i < array.length) {
    if (maxSize <= array[i]) {
      maxSize = array[i];
      westView = [0];
    }
    westView.push(array[i]);
    if (westView[westView.length - 2] < westView[westView.length - 1]) {
      westView[westView.length - 2] = westView[westView.length - 1];
      westView.pop();
    }

    i++;
  }
  console.table(westView);
}

algo([3,7,8,3,5,1,10,3,7,8,3,5,1]);