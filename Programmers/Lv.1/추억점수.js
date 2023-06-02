function solution(name, yearning, photo) {
  var answer = [];
  let score = name.reduce((acc,cur,index) =>{
      if(!acc[cur]) acc[cur] = yearning[index];
      return acc;
  },{}); 

  for(let i = 0 ; i < photo.length ; i++){
    let tmp = 0;
      for(let j = 0 ; j < photo[i].length ; j++){
        if(score[photo[i][j]]){tmp += score[photo[i][j]];}
      }
      answer.push(tmp);
  }
  return answer;
}

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];
solution(name, yearning, photo);