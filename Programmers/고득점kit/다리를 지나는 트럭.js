function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let data = [];
  let pro = [];
  let total = 0;
  while (1) {
    answer++; //초 지남
    if (pro[0] == bridge_length) { //다리 다 건너면 시간초랑 차 빼주기
      total -= data[0];
      pro.shift();
      data.shift();
    }
    if (total + truck_weights[0] <= weight) { // 현재 다리위에있는 대기중인 차 무게의 합이 버틸수 있는 무게보다 작으면 차랑 시간초 푸시
      data.push(truck_weights.shift());
      pro.push(0);
      total += data[data.length - 1];
    }
    if (pro.length == 0 && data.length == 0 && truck_weights.length == 0) {//차도 없고 다리도 비었다면 종료
      break;
    }
    pro = pro.map((v) => v + 1); //시간배열 초 추가
  }
  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
