function solution(priorities, location) {
  var answer = 0;
  let sortarr = [...priorities].sort((a, b) => a - b);
  let i = 0;
  let num = sortarr.pop();

  while (priorities.length > 0) {
    console.log(priorities, location);
    if (priorities[0] == num && location == 0) {
      answer++;
      break;
    }
    if (priorities[0] == num) {
      priorities.shift();
      num = sortarr.pop();
      location--;
      answer++;
    } else {
      let tmp = priorities.shift();
      priorities.push(tmp);
      location--;
    }    
    if (location < 0) {
      location = priorities.length-1;
    }
  }
  console.log(answer);

  return answer;
}

let priorities = [1,2,3,4,5];
let location = 0;

solution(priorities, location);
