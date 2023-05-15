function solution(sizes) {
  let w=[];
  let h=[];
  sizes.map(v => {
    if(v[1]> v[0]){
      [v[0], v[1]] = [v[1],v[0]];
    }
    w.push(v[0]);
    h.push(v[1]);
  });
  
  console.log(sizes, w, h);

  return Math.max(...w) * Math.max(...h);
}
let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
solution(sizes);