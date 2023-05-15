const fs = require('fs');
const input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/이것이 코딩테스트다/stdin.txt').toString().split('\n');

const [N,M,K] = input[0].split(' ').map(Number);
const [first, second] = input[1].split(' ')
.map(Number)
.sort((a, b) => b - a);


let t = (M/(K + 1));
let s = M % (K+1);

let result = (first * K * t) + (second * (t + s));

console.log(result);