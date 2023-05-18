/*function solution(n) {
  var answer = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      count++;
      n++;
      console.log(`${i}`);
    } else if (i.toString().split('').includes('3')) {
      count++;
      n++;
      console.log(`${i}`);
    }
  }
  return n;
}
let n = 15;
console.log(solution(n));

function solution(spell, dic) {
  let arr = new Array(dic.length).fill(0);
  for (let i = 0; i < spell.length; i++) {
    dic.forEach((el, index) => {
      if (el.includes(spell[i])) {
        arr[index] += 1;
      }
    });
  }
  console.log(arr);
  return arr.includes(spell.length) ? 1 : 2;
}
let spell = ['z', 'd', 'x'];
let dic = ['def', 'dww', 'dzx', 'loveaw'];
solution(spell, dic);

function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => b - a);
    for(let i = sides[0] - sides[1] ; i < sides[1]+sides[0]-1 ; i++) answer++;    
    return answer;
}
*/
