function solution(queue1, queue2) {
  var answer = -2;
  let que1 = [...queue1,...queue2];
  let que2 = [...queue2,...queue1];
  let first = 0;
  let last = 0;
  let sum = 0;
  let half = que1.reduce((a,b) => a + b) / 2;
  while(true){
      if(sum === half || first === que1.length -1) break;
      sum += que1[first];
      first++;
      if(sum > half) {
          sum -= que1[last];
          last++;
      }
  }
  console.log(last)
  return last;
}
const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];
console.log(solution(queue1,queue2));