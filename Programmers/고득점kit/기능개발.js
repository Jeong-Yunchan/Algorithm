const progresses = [90, 90, 90, 90];
const speeds = [30, 1, 1, 1];

function solution(progresses, speeds) {
  let arr = [];
  let count = 0;
  let time = progresses.length;
  while (time > count) {
    let tno = 0;

    progresses.forEach((pro, index) => {
      progresses[index] += speeds[index];
      console.log(progresses);
    });

    for (let i = 0; i < time; i++) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        tno++;
      } else break;
    }

    if (tno > 0) {
      arr.push(tno);
    }

    if (arr.length > 0) {
      count = arr.reduce((a, b) => a + b);
    }

    console.log(arr);
  }
}





console.log(solution(progresses, speeds));
