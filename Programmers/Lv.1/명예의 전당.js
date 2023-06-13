function solution(k, score) {
  var answer = [];
  let stack = [];
  score.forEach(el =>{
      stack.push(el);
      stack.sort((a,b) => b - a);
      if(stack.length <= k) answer.push(stack[stack.length -1]);
      else answer.push(stack[k-1]);
  });
  return answer;
}