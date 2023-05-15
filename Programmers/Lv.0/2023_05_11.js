/*
function solution(chicken) {
  var answer = 0;
  while(chicken > 9){
      answer += (Math.floor(chicken / 10));
      chicken = Math.floor(chicken / 10) + (chicken % 10);
  }
  return answer;
}
*/

function solution(id_pw, db) {
  var answer = '';
  /*
  let data = {};
  db.forEach(el=>{        //배열을 객체로 
      data[el[0]] = el[1];
  });
  */
  /*let data = Object.fromEntries(db);*/
  let data = db.reduce((acc, cur) => { // 배열을 Map으로 ###reduce이용   
    acc.set(cur[0], cur[1]);
    return acc;
  }, new Map());
  if(data.has(id_pw[0]) && data.get(id_pw[0]) == id_pw[1]){
    return "login";
  }else if(data.has(id_pw[0]) && data.get(id_pw[0]) != id_pw[1]){
    return 'wrong pw';
  }else{
    return 'fail';
  }
}

let id_pw = ['meosseugi', '1234'];
let db = [
  ['rardss', '123'],
  ['yyoom', '1234'],
  ['meosseugi', '1234'],
];
console.log(solution(id_pw, db));