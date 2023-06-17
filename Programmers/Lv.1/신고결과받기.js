const id_list = ['con', 'ryan'];
let report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k = 2;

function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let id_state = {};

  report.reduce((acc, cur) => {
    const [A, B] = cur.split(' ');
    if (!id_state[B]) id_state[B] = [A];
    else if (!id_state[B].includes(A)) id_state[B].push(A);
    return acc;
  }, {});
  for (value in id_state) {
    if (id_state[value].length >= k) {
      id_state[value].forEach((el) => {
        answer[id_list.indexOf(el)]++;
      });
    }
  }
  console.log(answer);
  return answer;
}

solution(id_list, report, k);

console.log([0].toString());