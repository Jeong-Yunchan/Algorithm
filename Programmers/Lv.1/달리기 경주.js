/* 객체로 푸려고 했으나 시간 초과
function solution(players, callings) {
  var answer = [];
  let player = players.reduce((acc, cur, index) => {
    acc.push({ name: cur, chart: index });
    return acc;
  }, []);
  let ch = -1;
  callings.forEach(el =>{
    player.map(v => {
      if(v.name === el){
        v.chart -= 1;
        ch = v.chart;
      }
    });
    player.map(v => {
      if(v.chart === ch && v.name !== el){
        v.chart += 1;
      }
    });
  });
  player.sort((a,b) => a.chart - b.chart);
  answer = player.map(v => v.name)
  return answer;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];
solution(players, callings);
*/
/* 구조분해 할당 이용 */
function solution(players, callings) {
  let map = new Map();
  players.forEach((el,index) =>{
    map.set(el,index);
  });
  callings.forEach(el =>{
    const ind = map.get(el);
    const front = players[ind-1];
    [players[ind],players[ind-1]] = [players[ind-1], players[ind]];
    map.set(el,map.get(el)-1);
    map.set(front, map.get(front)+1);
  });
  console.log(players);
  return players;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];
solution(players, callings);
