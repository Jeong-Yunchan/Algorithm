function solution(dartResult) {
  var answer = 0;
  let arr = [];
  [...dartResult].forEach((el) => {
    let index = arr.length - 1;
    if (arr[index] == 1 && el == '0') {
      return (arr[index] = 10);
    }
    if (el == '*') {
      arr[index] *= 2;
      arr[index - 1] *= 2;
    } else if (el == '#') {
      arr[index] *= -1;
    }
    if (el == 'S') {
      arr[index] = arr[index] ** 1;
    } else if (el == 'D') {
      arr[index] = arr[index] ** 2;
    } else if (el == 'T') {
      arr[index] = arr[index] ** 3;
    }
    if (el <= 10 || el <= 0) {
      arr.push(Number(el));
    }
  });
  console.log(arr);
  answer = arr.reduce((a, b) => a + b);
  return answer;
}

let dartResult = '1D2S#10S';
console.log(solution(dartResult));
