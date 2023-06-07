function solution(r1, r2) {
  var answer = 0;

  for (let i = 1; i <= r2; i++) {
    const y1 = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
    const y2 = i >= r1 ? 0 : Math.ceil(Math.sqrt(r1 ** 2 - i ** 2));

    answer += y1 - y2 + 1;
  }
  console.log(answer * 4);
  return answer * 4;
}
const r1 = 2;
const r2 = 3;
solution(r1, r2);
