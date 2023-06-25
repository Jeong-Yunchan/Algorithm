function solution(picks, minerals) {
  var answer = 0;
  let pic = picks.reduce((a, b) => a + b);
  let arr = [];
  if (pic === 0) return 0;
  minerals = minerals.splice(0, pic * 5);
  for (let i = 0; i < pic; i++) {
    let obj = { d: 0, i: 0, s: 0 };
    minerals.splice(0, 5).map((v) => obj[v[0]]++);
    arr.push([
      obj.d * 1 + obj.i * 1 + obj.s * 1,
      obj.d * 5 + obj.i * 1 + obj.s * 1,
      obj.d * 25 + obj.i * 5 + obj.s * 1,
    ]);
  }
  arr
    .sort((a, b) => b[2] - a[2])
    .map((v) => {
      if (picks[0] > 0) return picks[0]--, (answer += v[0]);
      if (picks[1] > 0) return picks[1]--, (answer += v[1]);
      if (picks[2] > 0) return picks[2]--, (answer += v[2]);
    });

  return answer;
}

picks = [1, 3, 2];
minerals = [
  'diamond',
  'diamond',
  'diamond',
  'iron',
  'iron',
  'diamond',
  'iron',
  'stone',
];
solution(picks, minerals);
