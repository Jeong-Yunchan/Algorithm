function solution(book_time) {
  var answer = 0;
  let time = [];
  let finish = [];
  time = book_time
    .map((v) => [
      Number(v[0].split(':')[0]) * 60 + Number(v[0].split(':')[1]),
      Number(v[1].split(':')[0]) * 60 + Number(v[1].split(':')[1])+10,
    ])
    .sort((a, b) => a[0] - b[0]);
  console.log(time);
  for (let i = 0; i < time.length; i++) {
    if (i === 0) {
      finish.push(time[i][1]);
      continue;
    }
    finish.sort((a,b) => a- b);
    let flag = false;
    for (let j = 0; j < finish.length; j++) {
      if (finish[j] <= time[i][0]) {
        finish[j] = time[i][1];
        flag = true;
        break;
      }
    }
    if (flag === false) finish.push(time[i][1]);
    console.log(finish);
  }
  console.log(finish.length);
  return answer;
}
const book_time = [["08:00", "08:30"], ["08:40", "13:00"], ["08:40", "13:30"]];
solution(book_time);
