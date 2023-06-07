function solution(wallpaper) {
  var answer = [];
  let row =[];
  let cal =[];
  wallpaper.forEach((el1,C) =>{
    el1.split('').forEach((el2,R) =>{
      if(el2=='#'){
        row.push(R);
        cal.push(C);
      }
    });
  });
  row.sort((a,b)=> a - b);
  cal.sort((a,b)=> a - b);
  console.log(cal,row);
  return [cal[0],row[0],cal[cal.length-1]+1,row[row.length-1]+1];
}
const wallpaper = [".#...", "..#..", "...#."];
solution(wallpaper);