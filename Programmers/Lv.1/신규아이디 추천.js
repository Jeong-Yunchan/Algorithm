function solution(new_id) {
  var answer = '';
  let str1 = [];
  let str2 = [];
  answer = new_id.toLowerCase();
  str1 = [...answer];
  for(s of str){
    if(s ==  '!'|| s == '@'|| s == '#' || s == '*' ){
      delete s;
    }
    str2.push(s);
  }
  return answer;
}


const new_id = "...!@BaT#*..y.abcdefghijklm"
console.log(solution(new_id));