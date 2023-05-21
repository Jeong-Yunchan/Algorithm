function solution(word) {
  let arr = ['A', 'E', 'I', 'O', 'U'];
  let com = [];
  let str = '';
  function dic(word, length, com){
    if(length == word.length){
      com.push(word);
      return;
    }
    arr.forEach(el =>{
      dic(word + el, length, com)
    });
  }

  for(let i = 1 ; i <=5 ; i++ ){
    dic(str,i,com);
  }
  com.sort();
  return com.indexOf(word)+1;
}

const word = 'AAAAE';
solution(word);
