const fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');


A = Math.floor((input[1] % 1000)/ 100)  //백의 자리
B = Math.floor((input[1] % 100) / 10) //십의 자리
C = Math.floor((input[1] % 10) / 1) // 일의 자리


console.log(input[0] * C);
console.log(input[0] * B);
console.log(input[0] * A);
console.log(input[0]*input[1]);