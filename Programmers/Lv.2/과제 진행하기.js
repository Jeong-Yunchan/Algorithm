function solution(plans) {
  var answer = [];
  for (let i = 0; i < plans.length; i++) {
    plans[i][1] =
      plans[i][1].split(':')[0] * 60 + Number(plans[i][1].split(':')[1]);
    plans[i][2] = plans[i][1] + Number(plans[i][2]);
  }
  plans.sort((a, b) => b[1] - a[1]);
  let time = plans[plans.length - 1][1];
  let process = [plans.pop()];
  while (1) {
    if (
      process.length > 0 &&
      process[process.length - 1][1] == process[process.length - 1][2]
    ) {
      answer.push(process.pop()[0]);
      console.log(process.length, plans.length);
      if (process.length == 0 && plans.length == 0) break;
    }
    if (plans.length > 0 && time == plans[plans.length - 1][1]) {
      process.push(plans.pop());
    }
    if (process.length != 0) {
      process[process.length - 1][1]++;
    }
    console.log(process);
    time++;
  }
  return answer;
}
const plans = [
  ['science', '12:20', '10'],
  ['music', '12:30', '10'],
  ['history', '12:10', '10'],
  ['computer', '12:40', '10'],
];
console.log(solution(plans));
