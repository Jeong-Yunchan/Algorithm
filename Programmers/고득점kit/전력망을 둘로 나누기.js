function solution(n, wires) {
  let answer = n - 2;

  let wireMap = wires.reduce((prev, cur) => {
    prev.set(
      cur[0],
      prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]
    );
    prev.set(
      cur[1],
      prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]
    );
    return prev;
  }, new Map());

  for (let i = 0; i < wires.length; i++) {
    answer = Math.min(getDivide(i), answer);
  }
  function getDivide(curIndex) {
    let leftConnection = new Set();
    leftConnection.add(wires[curIndex][0], 1);

    for (let v of leftConnection.keys()) {
      wireMap.get(v).forEach((el) => {
        if (el !== wires[curIndex][1]) {
          leftConnection.add(el, 1);
        }
        console.log(leftConnection);
      });
    }
    return Math.abs(n - leftConnection.size * 2);
  }

  //console.log(wireMap);
  return answer;
}

const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];
const n = 9;

solution(n, wires);
console.log(solution(n, wires));