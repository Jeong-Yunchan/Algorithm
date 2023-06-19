function solution(numbers, hand) {
  var answer = '';
  const map = {
    0: ['T', [3, 1]],
    1: ['L', [0, 0]],
    2: ['T', [0, 1]],
    3: ['R', [0, 2]],
    4: ['L', [1, 0]],
    5: ['T', [1, 1]],
    6: ['R', [1, 2]],
    7: ['L', [2, 0]],
    8: ['T', [2, 1]],
    9: ['R', [2, 2]],
  };
  let left = [3, 0];
  let right = [3, 2];
  numbers.forEach((el) => {
    const cal = map[el][1][0];
    const low = map[el][1][1];
    if (map[el][0] === 'T') {
      if (
        abs(cal - left[0]) + abs(low - left[1]) >
        abs(cal - right[0]) + abs(low - right[1])
      ) {
        answer += 'R';
        right = map[el][1];
      } else if (
        abs(cal - left[0]) + abs(low - left[1]) <
        abs(cal - right[0]) + abs(low - right[1])
      ) {
        answer += 'L';
        left = map[el][1];
      } else {
        if (hand === 'right') {
          answer += 'R';
          right = map[el][1];
        } else {
          answer += 'L';
          left = map[el][1];
        }
      }
    } else {
      if (map[el][0] === 'R') {
        answer += map[el][0];
        right = map[el][1];
        
      } else {
        answer += map[el][0];
        left = map[el][1];
      }
    }
  });
  return answer;
}
abs = (num) => {
  return Math.abs(num);
};

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

solution(numbers, hand);
