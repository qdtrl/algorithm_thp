minrun = 32
var times = 0;
const insSort = (arr,start,end) => {
    for (let i = start+1; i < end + 1;i++) {
      let elem = arr[i];
        j = i-1;
        while (j>=start && elem<arr[j]) {
          arr[j+1] = arr[j];
          j -= 1;
          times++;
        }
        arr[j+1] = elem;
    } 
    return arr;
}

const merge = (arr,start,mid,end) => {
  if (mid==end) {
    return arr;
  }
  let first = arr.slice(start,mid+1);
  let last = arr.slice(mid+1,end+1);
  let len1 = mid-start+1;
  let len2 = end-mid;
  let ind1 = 0;
  let ind2 = 0;
  let ind  = start;

  while (ind1<len1 && ind2<len2) {
    times++;
    if (first[ind1]<last[ind2]){
        arr[ind] = first[ind1]
        ind1 += 1
    } else {
      arr[ind] = last[ind2];
      ind2 += 1;
    }
    ind += 1;
  } 

  while (ind1<len1) {
    times++;
    arr[ind] = first[ind1];
    ind1 += 1;
    ind += 1;
  }
  while (ind2<len2) {
    times++;
    arr[ind] = last[ind2];
    ind2 += 1;
    ind += 1;
  }  
        
  return arr;
   
}
       

const timSort = arr => {
    n = arr.length;
    
    for(let start = 0;start < n; start+=minrun) {
      end = Math.min(start+minrun-1,n-1);
      arr = insSort(arr,start,end);
    }
    curr_size = minrun;
    while (curr_size<n) {    
        for(let start = 0; start< n; start += curr_size*2){
            mid = Math.min(n-1,start+curr_size-1);
            end = Math.min(n-1,mid+curr_size);
            arr = merge(arr,start,mid,end);
        }
        curr_size *= 2;
    }
    return arr.filter(x => x !== undefined);
}

const fs = require('fs');

const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, 'utf8');
  let myData = data.split(' ').map(int => Number(int));
  console.log(`${timSort(myData)} - Tri fusion: ${times} comparaisons`);
} catch (error) {
  console.error(error.message);
}