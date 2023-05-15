function solution(answers) {
  var answer = [];
  let value = [];
  let count = 0;
  let dap = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  dap.forEach((el) => {
    for (let i = 0; i < answers.length; i++) {
      if (el[i % el.length] == answers[i]) {
        count++;
      }
    }
    answer.push(count);
    count = 0;
  });
  answer.forEach((el, index) => {
    if (Math.max(...answer) == el) {
      value.push(index + 1);
    }
  });
  console.log(value);
  return value;
}
let answers = [1, 2, 3, 4, 5];
solution(answers);
