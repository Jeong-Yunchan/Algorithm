function solution(m, n, startX, startY, balls) {
  var answer = [];
  let len = [
    [-startX, startY],
    [startX, -startY],
    [(m - startX) * 2 + startX, startY],
    [startX, (n - startY) * 2 + startY],
  ];
  balls.forEach((el) => {
    let min = [];
    if (startX === el[0]) {
      for (let i = 0; i < 4; i += 2) {
        const [x, y] = len[i];
        min.push((el[0] - x) ** 2 + (el[1] - y) ** 2);
      }
      if (startY < el[1]) {
        min.push((startY + el[1]) ** 2);
      } else {
        min.push((n - startY + (n - el[1])) ** 2);
      }
    } else if (startY === el[1]) {
      for (let i = 1; i < 4; i += 2) {
        const [x, y] = len[i];
        min.push((el[0] - x) ** 2 + (el[1] - y) ** 2);
      }
      if (startX < el[0]) {
        min.push((startX + el[0]) ** 2);
      } else {
        min.push((m - startX + (m - el[0])) ** 2);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const [x, y] = len[i];
        min.push((el[0] - x) ** 2 + (el[1] - y) ** 2);
      }
    }
    console.log(min);
    answer.push(Math.min(...min));
  });
  return answer;
}
