//floyd-Warshall算法：计算图中最短路径的动态规划算法

//创建邻接矩阵
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

export default function floydWarshall(graph) {
  const dist = [];
  for (let i = 0; i < graph.length; i++) {
    dist[i] = [];
    for (let j = 0; j < graph.length; j++) {
      if (i === j) dist[i][j] = 0;
      //i与j不相邻的时候，将dist[i][j]设置为无穷大
      else if (graph[i][j] === 0) dist[i][j] = Infinity;
      else dist[i][j] = graph[i][j];
    }
  }

  for (let u = 0; u < graph.length; u++) {
    for (let v = 0; v < graph.length; v++) {
      for (let w = 0; w < graph.length; w++) {
        if (dist[v][u] + dist[u][w] < dist[v][w]) {
          dist[v][w] = dist[v][u] + dist[u][w];
        }
      }
    }
  }
  return dist;
}


let result = floydWarshall(graph);
console.log(result);

