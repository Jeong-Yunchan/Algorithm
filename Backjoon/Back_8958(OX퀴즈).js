const solution = (N, data) => {
  let sum = 0;
  let t = 0;
  for(i = 0 ; i < N; i++) {
    for(j = 0 ; j < data[i].length; j++) {
      if(data[i][j] == 'O'){
        sum += 1;
        sum += t;
        t += 1;
      } else {
        t = 0;
      } 
    }
    console.log(sum);
    sum = 0;
    t = 0;
  }
};

let fs = require('fs');
let input = fs.readFileSync('/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
  // 위에서 N을 받을떄 input[0]이 빠져나갔기 때문에 1~N을 받아야한다.
  data.push(input[i].split('').map((el) => el));
}

solution(N, data);