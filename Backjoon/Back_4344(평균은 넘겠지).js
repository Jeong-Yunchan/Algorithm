const fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');

const N = parseInt(input[0]);
const data = [];

for(let i = 1 ; i < N + 1 ; i++) {
  data.push(input[i].split(' ').map((el) => parseInt(el)));
}

for(let i = 0 ; i < N  ; i++) {
  let sum = 0;
  let ver = 0;
  let count = 0;
  let out = 0;
  for(let j = 1 ; j < data[i][0]+ 1; j++){
    sum += data[i][j];
  }

  ver = sum / data[i][0];
  for(let k = 1 ; k < data[i][0] +1 ; k++){
    if(data [i][k] > ver) count++;
  }
  out =  count / data[i][0] * 100;
  console.log(out.toFixed(3)+'%');
}