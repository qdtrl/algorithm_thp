var array_length;
var times = 0;
const heap = (array, i) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  times++;
  
  if (left < array_length && array[left] > array[max]) {
    max = left;
  }

  if (right < array_length && array[right] > array[max]) {
    max = right;
  }

  if (max != i) {
    swap(array, i, max);
    heap(array, max);
  }
}

const swap = (array, indexA, indexB) =>{
  let swap = array[indexA];

  array[indexA] = array[indexB];
  array[indexB] = swap;
}

const heapSort = array => { 
  array_length = array.length;
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heap(array, i);
    }

  for (let i = array_length - 1; i > 0; i--) {
    swap(array, 0, i);    
    array_length--;
    heap(array, 0);
  }
  return array;
}

const fs = require('fs');

const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, 'utf8');
  let myData = data.split(' ').map(int => Number(int));
  console.log(`${heapSort(myData)} - Tri tas: ${times} comparaisons`);
} catch (error) {
  console.error(error.message);
}