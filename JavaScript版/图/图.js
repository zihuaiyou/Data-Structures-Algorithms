import { Colors } from "../modules/graph-models.js";
import Dictionary from "../字典和散列表/字典.js";

export default class Graph {
  constructor(isDirected = false) {
    //有向图or无向图
    this.isDirected = isDirected;
    //顶点数组
    this.vertices = [];
    //邻接表
    this.adjList = new Dictionary();
  }

  addVertices(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
      return true;
    }
    return false;
  }

  addEdge(v, w) {
    if (!this.vertices.includes(v)) this.addVertices(v);
    if (!this.vertices.includes(w)) this.addVertices(w);
    this.adjList.get(v).push(w);
    //无向图要添加两条路径
    if (!this.isDirected) this.adjList.get(w).push(v);
  }

  getVertices() {
    return this.vertices;
  }

  getAdjLists() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} => `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += `\n`;
    }
    return s;
  }

  initializeColor(){
      const color = {};
      for (let i = 0; i < this.vertices.length; i++) {
          color[this.vertices[i]] = Colors.WHITE;
      }
      return color;
  }
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

// console.log(graph.toString());
 