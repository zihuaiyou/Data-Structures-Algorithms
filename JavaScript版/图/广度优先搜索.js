import { Colors } from "../modules/graph-models.js";
import Queue from "../对列/队列.js";
import Graph from "./图.js";

//广度优先搜索 数据结构：对列(先进先出)
export default function breadthFirstSearch(
  startVertices,
  callback,
  graph
) { 
  const vertices = graph.getVertices();
  const adjList = graph.getAdjLists();
  const queue = new Queue();
  //初始化图，让所有顶点都变成白色；
  //白色表示未被访问
  //灰色表示被访问一次
  //黑色表示已被探索完
  const color = graph.initializeColor();

  queue.enqueue(startVertices);
  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    color[u] = Colors.GREY;
    const neighbor = adjList.get(u);
    for (let i = 0; i < neighbor.length; i++) {
      if (color[neighbor[i]] === Colors.WHITE) {
        color[neighbor[i]] = Colors.GREY;
        queue.enqueue(neighbor[i]);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) callback(u);
  }
}

const printValue = (value) => {
    console.log(value)
}
let graph = new Graph();
const graphArr = ["A","B","C","D","E","F","G","H"];
for (let index = 0; index < 8; index++) {
    graph.addVertices(graphArr[index])
}
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("C","D");
graph.addEdge("C","G");
graph.addEdge("D","H");
graph.addEdge("D","G");

breadthFirstSearch("B",printValue,graph)
