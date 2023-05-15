 let n = 1250;
 let count = 0;

 const cointype = [500, 100, 50, 10];

 for (const i of cointype){
  count += Math.floor(n / i); //코인개수
  n = n % i; //나머지
 }
 console.log(count);
