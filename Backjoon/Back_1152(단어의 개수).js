let fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().trim().split(' ');

console.log(input[0]==='' ? 0 : input.length);