function solution(k, dungeons) {
  var answer = -1;
  let count = 0;
  let pee = k;
  const all = select(dungeons);
  console.log(all);

  for(let A of all){
    count = 0;
    pee = k;
    for(let el of A){
      if(pee >= el[0]){
        pee -= el[1];
        count++; 
      }else if(pee < el[0] || pee <= 0){
        continue;
      }
    }
    console.log(A);
    if(count > answer) answer = count;
  }
  return answer;
}

function select(arr){
  let results = [];
  if(arr.length == 1){
    return arr.map(v => [v]);
  }
  arr.forEach((fix, index, origin) => {
    const rest = [...origin.slice(0,index),...origin.slice(index+1)];
    const com = select(rest);
    const att = com.map(el => [fix, ...el]);
    results.push(...att);
  });
  return results;
}

let dungeons = [[80,20],[50,40],[30,10]];
let k = 80;


console.log(solution(k,dungeons));