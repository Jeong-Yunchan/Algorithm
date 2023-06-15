function solution(babbling) {
  var answer = 0;
  let tmp;
  const bab = ['aya', 'ye', 'woo', 'ma'];
  babbling.forEach((el) => {
    tmp = el;
    bab.forEach((bb) => {
      let index = -3;
      while (tmp.includes(bb) && tmp.indexOf(bb) != index+1) {
        index = tmp.indexOf(bb);
        tmp = tmp.slice(0, index) + " " + tmp.slice(index + bb.length);
      }
    });
    tmp = tmp.split('').join('').trim();
    console.log(tmp);
    if (tmp === '') answer++;
  });
  return answer;
}
const babbling = ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'];
solution(babbling);
