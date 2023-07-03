const fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/jeong-yunchan/Desktop/Project/Algorithm/Backjoon/stdin.txt'
  )
  .toString()
  .split('\n');

const [n, m, num] = input.shift().split(' ');
let arr = input.map((v) => v.split(' '));
let graph = {};
arr.forEach((el) => {
  if (!graph[el[0]]) {
    graph[el[0]] = [el[1]];
    if (!graph[el[1]]) graph[el[1]] = [el[0]];
    else graph[el[1]].push(el[0]);
  } else {
    graph[el[0]].push(el[1]);
    if (!graph[el[1]]) graph[el[1]] = [el[0]];
    else graph[el[1]].push(el[0]);
  }
});

for (let cur in graph) {
  graph[cur].sort((a, b) => a - b);
}
let visitedNode = [];
let visited = [];
let DFS = (start) => {
  if (!visitedNode.includes(start)) {
    visited[start] = true;
    visitedNode.push(start);
  }
  for (let curNode of graph[start]) {
    if (!visited[curNode]) {
      DFS(curNode);
    }
  }
};

let BFS = (start) => {
  let que = [];
  let visited = [];
  que.push(start);
  while (que.length) {
    let node = que.shift();
    visited.push(node);
    for (let cur of graph[node]) {
      if (!visited.includes(cur) && !que.includes(cur)) {
        que.push(cur);
      }
    }
  }
  console.log(...visited);
};
DFS(num);
console.log(...visitedNode);
BFS(num);
