import { Colors } from "../modules/graph-models.js";
import Queue from "../对列/队列.js";
import Graph from "./图.js";
import Stack from "../栈/栈.js";

//改进版广度优先搜索
export default function BFS(graph, startVertices) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjLists();
  const color = graph.initializeColor();
  const queue = new Queue();
  //distance 开始顶点到当前顶点的距离
  const distance = {};
  //当前顶点的前溯点
  const predecessors = {};

  queue.enqueue(startVertices);
  //初始化顶点的距离与前溯点
  for (let i = 0; i < vertices.length; i++) {
    distance[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    color[u] = Colors.GREY;
    let neighbor = adjList.get(u);
    for (let j = 0; j < neighbor.length; j++) {
      let w = neighbor[j];
      if (color[w] === Colors.WHITE) {
        queue.enqueue(w);
        color[w] = Colors.GREY;
        distance[w] = distance[u] + 1;
        predecessors[w] = u;
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distance,
    predecessors,
  };
}

//使用广度优先搜索寻找最短路径
export function BFSshortestRoad(graphArr, bfs) {
  const fromVertices = graphArr[0];
  const path = new Stack();
  for (let i = 1; i < graphArr.length; i++) {
    let toVertices = graphArr[i];

    //向前追溯;
    for (let j = toVertices; j !== fromVertices; j = bfs.predecessors[j]) {
      path.push(j);
    }
    path.push(fromVertices);

    let s = path.pop();
    while (!path.isEmpty()) {
      s += "-" + path.pop();
    }
    console.log(s);
  }
}




let graph = new Graph();
const graphArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let index = 0; index < 8; index++) {
  graph.addVertices(graphArr[index]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "H");
graph.addEdge("D", "G");
graph.addEdge("E", "I");

let bfs = BFS(graph, "A");

BFSshortestRoad(graphArr, bfs);
