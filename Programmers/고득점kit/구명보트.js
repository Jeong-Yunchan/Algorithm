function solution(people, limit) {
  var answer = 0;
  people.sort((a,b) => a - b);
  while(people.length > 0){
    if(people[0]+people[people.length-1] <= limit){
      people.shift();
      people.pop();
      answer++;
    }else{
      people.pop();
      answer++;
    }
  }
  console.log(answer);
  return answer;
}
const people = [70, 50, 80, 50]
const limit = 100;
solution(people,limit);