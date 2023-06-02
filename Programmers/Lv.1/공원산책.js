function solution(park, routes) {
  let parkmap = [];
  let start = [];
  const pos = {N :[-1,0],S:[1,0],W:[0,-1],E:[0,1]};
  park.forEach(el => {
    parkmap.push(el.split(""));
  });
  parkmap.forEach((e1,cal)=>{
    e1.forEach((e2,row) =>{
      if(e2 == "S") {
        start.push(cal);
        start.push(row);
        return false;
      }
    });
  });
  const rowrange = parkmap[0].length-1;
  const calrange = parkmap.length-1;
  routes.forEach(el =>{
    const rout = el.split(' ')[0];
    const go = el.split(' ')[1];
    let cal = start[0];
    let row = start[1];
    let flag = true;
    for(let i = 0 ; i < Number(go) ; i++){
      cal += pos[rout][0];
      row += pos[rout][1];
      if(cal > calrange || cal < 0 || row > rowrange || row < 0 || parkmap[cal][row] == "X"){
        flag = false;
        break;
      } 
    }
    if(flag){
      start[0] = cal;
      start[1] = row;
    }
    console.log(start);   
  });
  return start;
}
const park = ["OSO","OOO","OXO","OOO"]	;
const routes = 	["E 2","S 3","W 1"];
solution(park, routes);