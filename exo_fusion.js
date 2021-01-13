var times = 0;

const mergeSort = (array) => {
  if (array.length <= 1 ) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return merge(
    mergeSort(leftArray),
    mergeSort(rightArray)
  );
};

const merge = (leftArray, rightArray) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftEl = leftArray[leftIndex];
    const rightEl = rightArray[rightIndex];
    times++;
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
};


const fs = require('fs');

const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, 'utf8');
  let myData = data.split(' ').map(int => Number(int));
  console.log(`${mergeSort(myData)} - Tri fusion: ${times} comparaisons`);
} catch (error) {
  console.error(error.message);
}