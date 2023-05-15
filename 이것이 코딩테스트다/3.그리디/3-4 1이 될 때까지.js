const fs = require('fs');
const input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt').toString().split(' ').map(Number);

let N = input[0];
let K = input[1];
let count = 0;

while (true){
  if(N === 1) break;
  if(N % K === 0) {
    N /= K;
    count++;
  }else{
    N -= 1;
    count++;
  }
}
console.log(count);
