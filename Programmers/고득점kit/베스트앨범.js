function solution(genres, plays) {
  var answer = [];
  let elbum = {};
  let sortelbum = [];

  for (let i = 0; i < plays.length; i++) {
    if (genres[i] in elbum) {
      elbum[genres[i]] += plays[i];
      continue;
    }
    elbum[genres[i]] = plays[i];
  }
  for(let genres in elbum){
    sortelbum.push([genres, elbum[genres]])
  }
  sortelbum.sort((a,b)=>b[1]-a[1]);
  
  console.log(sortelbum);
  return answer;
}

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];
solution(genres, plays);
