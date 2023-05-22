function solution(n, lost, reserve) {
  let student = new Array(n).fill(1);
  lost.forEach((el) => {
    student[el - 1] -= 1;
  });
  reserve.forEach((el) => {
    student[el - 1] += 1;
  });
  student.forEach((el, index) => {
    if (el == 2 && student[index - 1] == 0) {
      student[index] -= 1;
      student[index - 1] += 1;
    } else if (el == 2 && student[index + 1] == 0) {
      student[index] -= 1;
      student[index + 1] += 1;
    }
  });
  return student.filter((v) => v > 0).length;
}
const n = 5;
const lost = [2, 4];
const reserve = [3];
solution(n, lost, reserve);
