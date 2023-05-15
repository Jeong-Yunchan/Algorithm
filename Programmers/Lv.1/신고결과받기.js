const id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;

function solution(id_list, report, k) {
  let answer = [];
  let id_state = {};
  let id_result = {};
  report = report.filter((v,i) => report.indexOf(v)===i);

  id_list.forEach(name => {
    id_state[name] = 0;
    id_result[name] = 0;   
  });

  report.forEach(reName => {
    id_state[reName.split(' ')[1]] +=1;
  })

  for(let key in id_state){
    if(id_state[key] > k-1){
      report.forEach(reName => {
        if(key === reName.split(' ')[1]){
          id_result[reName.split(' ')[0]] += 1;
        }
      })
    }
  }
  
  answer = Object.values(id_result);
  
  console.log(answer);
  return answer;
}

solution(id_list, report, k);