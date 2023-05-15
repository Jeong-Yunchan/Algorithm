const fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString();

if(input % 4 == 0 && input % 100 != 0){
  console.log(1);
}
else if(input % 400 == 0 ){
  console.log(1);
}
else console.log(0);