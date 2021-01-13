const fs = require('fs');

const nbrNumber = process.argv[2];
let string = "";

for(let i = 0; i < nbrNumber; i++) {
  string += String(Math.floor(Math.random() * Math.floor(500))) + " ";
}

console.log(string);