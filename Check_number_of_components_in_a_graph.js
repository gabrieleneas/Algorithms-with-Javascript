const graph = [
    [1],
    [0, 2],
    [1],
    [4],
    [3]
]


const findindComponents = () => {

    let visited = [];

    for (let v = 0; v < graph.length; v++) {
        if (!visited.includes(v)) {
            dfsUtil(v, visited);
            console.log("-------------------------------")
        }
    }

}


const dfsUtil = (curr, visited) => {
    console.log(curr);
    visited.push(curr);

    neighbors = graph[curr];

    for (const neighbor of neighbors) {
        if (!visited.includes(neighbor)) {
            dfsUtil(neighbor, visited);
        }
    }
}

findindComponents();