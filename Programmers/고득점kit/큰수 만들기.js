function solution(number, k) {
  const stack = [];
  let answer = '';

  for(let i = 0 ; i < number.length ; i++){
    const el = number[i];

    while( k > 0 && stack[stack.length-1] < el){
      stack.pop();
      k--;
    }
    stack.push(el);
    console.log(stack);
  }
  console.log(stack);
}

const number = '15638111119';
const k = 5;
solution(number, k);
