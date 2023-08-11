function solution(info, query) {
  var answer = [];
  let info_dic = info.reduce((acc, cur) => {
    let t = cur.split(' ');
    let name = 0;
    if (t[0] === 'python') name += 1000;
    else if (t[0] === 'cpp') name += 2000;
    else if (t[0] === 'java') name += 3000;
    if (t[1] === 'frontend') name += 100;
    else if (t[1] === 'backend') name += 200;
    if (t[2] === 'senior') name += 10;
    else if (t[2] === 'junior') name += 20;
    if (t[3] === 'pizza') name += 1;
    else if (t[3] === 'chicken') name += 2;
    if (!acc[name]) {
      acc[name] = [];
    }
    acc[name].push(t[4]);
    return acc;
  }, {});
  for(t in info_dic){
    info_dic[t].sort((a,b) => b - a);
  }
console.log(info_dic);
  for (let i = 0; i < query.length; i++) {
    const [leng, job, career, foodscore] = query[i].split(' and ');
    const [food, score] = foodscore.split(' ');
    let count = 0;
    let it_name = 0;
    if (leng === 'python') it_name += 1000;
    else if (leng === 'cpp') it_name += 2000;
    else if (leng === 'java') it_name += 3000;
    else if (leng === '-') it_name += 4000;
    if (job === 'frontend') it_name += 100;
    else if (job === 'backend') it_name += 200;
    else if (job === '-') it_name += 300;
    if (career === 'senior') it_name += 10;
    else if (career === 'junior') it_name += 20;
    else if (career === '-') it_name += 30;
    if (food === 'pizza') it_name += 1;
    else if (food === 'chicken') it_name += 2;
    else if (food === '-') it_name += 3;
    let set = [];
    it_name.toString().split('').forEach((el,index) =>{
      if(el === '4' && index === 0) set.push('1','2','3');
      else if(el === '3' && index !== 0) {
        let set1 = set.map(e => e + '1');
        let set2 = set.map(e => e + '2');
        set = [...set1 , ...set2];
      }
      else {
        if(index !== 0) set = set.map(v => v+el);
        else set.push(el);
      }
    });
    
    set.forEach(el =>{
      if(info_dic[el]) {
        for(let len = 0 ; len < info_dic[el].length ; len++){
          if(+info_dic[el][len] < score) break;
          count++;
        }
      }
    });
    answer.push(count);
  }
  return answer;
}

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

console.log(solution(info, query));
