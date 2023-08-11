function solution(dirs) {
  var answer = 0;
  let xpos = 0;
  let ypos = 0;
  let route = [];
  dirs.split('').forEach((el) => {
    switch (el) {
      case 'L': {
        let t = [xpos, ypos, xpos - 1, ypos].join('');
        if (xpos > -5 && !route.includes(t)) {
          route.push(
            [xpos, ypos, xpos - 1, ypos].join(''),
            [xpos - 1, ypos, xpos, ypos].join('')
          );
          answer++;
        }
        if (xpos > -5) xpos--;
        break;
      }
      case 'R': {
        let t = [xpos, ypos, xpos + 1, ypos].join('');
        if (xpos < 5 && !route.includes(t)) {
          route.push(
            [xpos, ypos, xpos + 1, ypos].join(''),
            [xpos + 1, ypos, xpos, ypos].join('')
          );
          answer++;
        }
        if (xpos < 5) xpos++;
        break;
      }
      case 'U': {
        let t = [xpos, ypos, xpos, ypos + 1].join('');
        if (ypos < 5 && !route.includes(t)) {
          route.push(
            [xpos, ypos, xpos, ypos + 1].join(''),
            [xpos, ypos + 1, xpos, ypos].join('')
          );
          answer++;
        }
        if (ypos < 5) ypos++;
        break;
      }
      case 'D': {
        let t = [xpos, ypos, xpos, ypos - 1].join('');
        if (ypos > -5 && !route.includes(t)) {
          route.push(
            [xpos, ypos, xpos, ypos - 1].join(''),
            [xpos, ypos - 1, xpos, ypos].join('')
          );
          answer++;
        }
        if (ypos > -5) ypos--;
        break;
      }
    }
  });
  console.log(route);
  return answer;
}
const dirs = 'LULLLLLLU';
console.log(solution(dirs));
