const graph = {
  A : ['B', 'C'],
  B : ['A', 'E', 'D'],
  C : ['A'],
  D : ['B', 'E'],
  E : ['B']
}

const visited = [];
const visitedNode = []; 

function dfs(startNode){
  if(!visitedNode.includes(startNode)){
    visited[startNode] = true;
    visitedNode.push(startNode);
  }
  for(let curNode of graph[startNode]){
    if(!visited[curNode]){
      dfs(curNode);
    }
  }
}

dfs('A');
console.log(visitedNode);