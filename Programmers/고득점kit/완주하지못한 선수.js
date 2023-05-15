const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

function solution(participant, completion) {
  let answer;
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  console.log(answer);
  return answer;
}

solution(participant, completion);
/*
function solution(participant, completion) {
  let answer;

  for(let i = 0; i < participant.length; i++) {
    for(let j = 0; j < completion.length; j++) {
      if(participant[i] === completion[j]){
        participant[i] = '0';
        completion[j] = '0';
        continue;
      }
    }  
  }
  for(let i = 0; i < participant.length; i++) {
    if(participant[i] != '0'){
      answer = participant[i];
    }
  }
  console.log(answer);

  return answer;
}

*/
