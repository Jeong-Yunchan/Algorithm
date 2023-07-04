function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  while(deliveries.length + pickups.length > 0){
    let dcap = cap;
    let pcap = cap;
    set(deliveries);
    set(pickups);
    deliveries.length > pickups.length ? answer += deliveries.length*2 : answer += pickups.length*2; 
    for(let i = 0 ; deliveries.length ; i++){
      let del = deliveries.pop();
      if(del === 0) continue;
      dcap -= del;
      if(dcap === 0) break;
      else if(dcap < 0){
        deliveries.push(-dcap); 
        break;
      }
    }
    set(deliveries);
    for(let j = 0 ; pickups.length ; j++){
      let pic = pickups.pop();
      if(pic===0)continue;
      pcap -= pic;
      console.log("Pcap "+pcap)
      if(pcap === 0) break;
      else if(pcap < 0){
        pickups.push(-pcap);
        break;
      }
    }
    set(pickups);
    console.log(deliveries);
    console.log(pickups);
    console.log(answer);
  }
  return answer;
}
const set = (arr) =>{
  for(let j = 0 ; arr.length ; j++){
    let tmp = arr.pop();
    if(tmp !== 0){
      arr.push(tmp);
      break;
    }
  }
}
const cap = 4;
const n = 5;
const deliveries =  [1, 0, 3, 1, 2];
const pickups =  [0, 3, 0, 4, 0];
solution(cap, n, deliveries, pickups);