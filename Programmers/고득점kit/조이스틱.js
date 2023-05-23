function solution(name) {
  var answer = 0;
  let Alpha = [...name];
  let pos = Alpha.map((v) => {
    let t = v.charCodeAt() - 65;
    let tmp = 26 - t;
    t = Math.min(t, tmp);
    return t;
  });
  answer = pos.reduce((a, b) => a + b);
  xindex = 1;
  for(let i = 0 ; i < name.length ; i++){
    if(Math.floor(xindex / 2) < xindex){
      let com = [Alpha.slice(Alpha.length - xindex),Alpha.slice(0,Alpha.length - xindex)]
      let left = 0;
      let right = 0;
      for(let i = 0 ; i < Alpha.length ; i++){
        i < xindex && Alpha[i] != null ? letf += Math.abs(Alpha.length - i) - 1 : Math.abs(Alpha.length - i) + 1         
      }
      left < right ? 
    }else{
      let com = [Alpha.slice(0,Alpha.length - xindex), Alpah.slice(Alpha.length - xindex)]
    }
  }
}

const name = 'N';
solution(name);
