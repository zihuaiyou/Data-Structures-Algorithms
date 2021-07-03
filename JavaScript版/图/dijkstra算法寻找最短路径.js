//dijkstra算法：求解单个源到所有其他源的最短路径的贪心算法；

//创建邻接矩阵
const graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0],
];

const INF = Number.MAX_SAFE_INTEGER;
export default function dijkstra(graph, src) {
    const dist = [];
    const visited = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let j = 0; j < graph.length - 1; j++) {
        //寻找未访问顶点中距离源点最近的顶点
        const u = minDistance(dist, visited);
        //将选出的顶点标为已访问,防止重复访问
        visited[j] = true;
        for (let v = 0; v < graph.length; v++) {
            if (!visited[v] && graph[u][v] !== 0
                && dist[v] !== 0
                && dist[u] + graph[u][v] < dist[v]) {
                //找到更短距离就将其替换
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

function minDistance(dist, visited) {
    let min = INF;
    let minIndex = -1;
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i] && dist[i] <= min) {
            min = dist[i];
            minIndex = i;
        }
    } 
    return minIndex;
}

let result = dijkstra(graph,0);
console.log(result);