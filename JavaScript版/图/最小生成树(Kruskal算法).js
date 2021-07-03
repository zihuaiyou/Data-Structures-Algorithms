//Kruskal算法：求解加权无向连通图的贪心算法

const INF = Number.MAX_SAFE_INTEGER;

export default function kruskal(graph) {
  const parent = [];
  let a;
  let b;
  let u;
  let v;
  let edges = 0;
  //最多n-1条边
  while (edges < graph.length - 1) {
    for (let i = 0, min = INF; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        //寻找最小的边
        if (graph[i][j] < min) {
          min = graph[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    //防止形成闭环
    u = find(u, parent);
    v = find(v, parent);
    //将两个顶点连接起来
    if (union(u, v, parent)) edges++;
    //去掉已经探索的顶点，避免重复探索
    graph[a][b] = graph[b][a] = INF;
  }
  return parent;
}

//这个函数可能有误
function find(i, parent) {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
}

function union(i, j, parent) {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
}

const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

function func(graph) {
  const newGraph = [];
  for (let i = 0; i < graph.length; i++) {
    newGraph[i] = graph[i].map((element) => {
      return element === 0 ? INF : element;
    });
  }
  return newGraph;
}
// console.log(func(graph));

let result = kruskal(func(graph));
console.log(result);
