const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
const ranking = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let luck = 0;
  lottos.forEach((num, index) => {
    for (i of win_nums) {
      if (num == i) {
        count++;
      }
    }
    if (num == 0) {
      luck++;
    }
  });
  const best = count + luck;
  const worst = count;

  answer.push(ranking[best]);
  answer.push(ranking[worst]);

  console.log(lottos, count, luck, answer);
  return answer;
}

solution(lottos, win_nums);
