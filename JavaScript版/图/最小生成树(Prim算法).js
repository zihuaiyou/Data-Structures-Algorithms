//Prim算法：求解加权无向连通图的贪心算法
const INF = Number.MAX_SAFE_INTEGER;

export default function Prim(graph) {
  const key = [];
  const parent = [];
  const visited = [];

  for (let i = 0; i < graph.length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  //根节点的权值为0；
  key[0] = 0;
  parent[0] = -1;

  for (let j = 0; j < graph.length - 1; j++) {
    //寻找未访问顶点中权值最小的顶点
    let u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < graph.length; v++) {
      if (!visited[v] && graph[u][v] && graph[u][v] < key[v]) {
        key[v] = graph[u][v];
        parent[v] = u;
      }
    }
  }
  return {
    parent,
    key,
  };
}

function minKey(graph, key, visited) {
  let min = INF;
  let minIndex = -1;
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i] && key[i] < min) {
      min = key[i];
      minIndex = i;
    }
  }
  return minIndex;
}

const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

let vertices = ["A", "B", "C", "D", "E", "F"];
let result = Prim(graph);
result.parent.forEach((elem, index) => {
  if (elem > -1) {
    console.log(
      `Edge:${vertices[elem]}->${vertices[index]} weight:${result.key[index]}`
    );
  }
});
