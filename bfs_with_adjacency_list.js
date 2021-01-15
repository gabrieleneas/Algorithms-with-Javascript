const graph = [
    [],
    [2, 3],
    [1],
    [1, 4],
    [3],
    []
];

const bfs = (graph, root) => {

    const distancesFromRoot = [];

    for (let index = 0; index < graph.length; index++) {
        distancesFromRoot[index] = -1;
    }

    distancesFromRoot[root] = 0;

    const queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        let neighbors = graph[currentNode];

        
        for (let index = 0; index < neighbors.length; index++) {
            if (distancesFromRoot[neighbors[index]] == -1) {

                distancesFromRoot[neighbors[index]] = distancesFromRoot[currentNode] + 6;

                queue.push(neighbors[index]);
            }
        }
    }


    let finalArray = []

    for (let index = 2; index < distancesFromRoot.length; index++) {

        finalArray.push(distancesFromRoot[index]);
    }

    return finalArray;
}

console.log(bfs(4, 2, [], 1));