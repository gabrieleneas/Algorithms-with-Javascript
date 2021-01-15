const graph = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

const bfs = (graph, root) => {
    
    const distancesFromRoot = [];

    for (let index = 0; index < graph.length; index++) {
        distancesFromRoot[index] = -1;
    }

    distancesFromRoot[root] = 0;

    const queue = [root];
  
    while(queue.length > 0){
        let currentNode = queue.shift();

        let connections = graph[currentNode];

        let neighbors = [];

        let index = connections.indexOf(1);

        while(index != -1){
            neighbors.push(index);
            index = connections.indexOf(1, index + 1);
        }
      
        for (let index = 0; index < neighbors.length; index++) {
            if(distancesFromRoot[neighbors[index]] == -1){

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

console.log(bfs(graph, 1));