import { Colors } from "../modules/graph-models.js";
import Graph from "./图.js";

export default function DFS(graph) {
  const vertices = graph.getVertices();
  const adjLists = graph.getAdjLists();
  const color = graph.initializeColor();
  //定义时间变量time;
  const time = { count: 0 };
  //顶点被发现时间d
  const d = {};
  //顶点被探索时间d
  const f = {};
  //顶点回溯点
  const p = {};

  for (let j = 0; j < vertices.length; j++) {
    d[vertices[j]] = 0;
    f[vertices[j]] = 0;
    p[vertices[j]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE)
      DFSVisit(vertices[i], adjLists, color, time, d, f, p);
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
}

export function DFSVisit(vertice, adjLists, color, time, d, f, p) {
  color[vertice] = Colors.GREY;
  d[vertice] = ++time.count;
  const neighbors = adjLists.get(vertice);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = vertice;
      DFSVisit(w, adjLists, color, time, d, f, p);
    }
  }
  color[vertice] = Colors.BLACK;
  f[vertice] = ++time.count;
}

let graph = new Graph(true);
const graphArr = ["A", "B", "C", "D", "E", "F"];
for (let index = 0; index < 6; index++) {
  graph.addVertices(graphArr[index]);
}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");

// console.log(DFS(graph));
let result = DFS(graph);

//拓扑排序(确定一些任务的执行顺序)
function topoSort(dfsGraph, graphArr) {
  const fTimes = dfsGraph.finished;
  let s = "";
  for (let i = 0; i < graphArr.length; i++) {
    let max = 0;
    let maxName = "";
    for (let j = 0; j < graphArr.length; j++) {   
      if (fTimes[graphArr[j]] > max) {
        max = fTimes[graphArr[j]];
        maxName = graphArr[j];
      }
    }
    s += "-" + maxName;
    delete fTimes[maxName];
  }

  console.log(s);
}

topoSort(result, graphArr);
