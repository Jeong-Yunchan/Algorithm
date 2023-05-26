/*
function solution(balls, share) {
  let tmp = share + 1;
  if (balls == 1 || balls == share) return 1;
  return Math.floor(Nfac(balls, tmp) / fac(balls - share));
}

function fac(n) {
  if (n == 1) return 1;
  else {
    return n * fac(n - 1);
  }
}

function Nfac(n, tmp) {
  if (n == tmp) return tmp;
  else {
    return n * Nfac(n - 1, tmp);
  }
}
let balls = 3;
let share = 2;
console.log(solution(balls, share));
*/
/*
function solution(rsp) {
  var answer = [];
  rsp.split('').forEach(el =>{
      if(el=='2') answer.push(0);
      else if(el == '0')answer.push(5);
      else answer.push(2);
  })
  return answer.join('');
}
*/
/*
function solution(letter) {
    const morse = { 
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
    }
    return letter.split(" ").map(a => morse[a]).join("");
}
*/

