import { Colors } from "../modules/graph-models.js";
import Graph from "./图.js";

export default  function depthFirstSearch(graph, callback) {
  const vertices = graph.getVertices();
  const adjLists = graph.getAdjLists();
  const color = graph.initializeColor();

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVist(vertices[i], color, callback, adjLists);
    }
  }
}

export function depthFirstSearchVist(vertice, color, callback, adjLists) {
    //灰色代表该顶点已被发现
  color[vertice] = Colors.GREY;
  if (callback) callback(vertice);
  const neighbors = adjLists.get(vertice);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVist(w, color, callback, adjLists);
    }
  }
    //黑色代表该顶点已被探索完毕
  color[vertice] = Colors.BLACK;
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
graph.addEdge("D", "G");      
graph.addEdge("D", "H");
graph.addEdge("E", "I");

let printValue = (value) => {
console.log(value);

}

depthFirstSearch(graph,printValue);