
const bfs = (n, m, edges, s) => {
    const graph = []
    
   
    for (let index = 0; index < n + 1; index++) {
        graph[index] = [];
    }
    
    for (let index = 0; index < edges.length; index++) {
        let node = edges[index][0];
        let edge = edges[index][1];
        graph[node].push(edge);
        graph[edge].push(node);
    }

    debugger
    const costs = []
  
    for (let index = 0; index < graph.length; index++) {
        costs[index] = -1;      
    }

    let root = s;

    costs[root] = 0;

    let queue = [root];
    debugger

    while(queue.length != 0){
        let node = queue.pop();

        let neighbors = graph[node];

        for (let index = 0; index < neighbors.length; index++) {
            if(costs[neighbors[index]] == -1){
                costs[neighbors[index]] = costs[node] + 6;
                queue.push(neighbors[index]);
            }
        }
    }

    debugger
    let finalCosts = [];
    debugger
    for (let index = 1; index < costs.length; index++) {
        if(index != root){
            finalCosts.push(costs[index]);    
        }
        
    } 
    debugger
    return finalCosts;
}



console.log(bfs(5, 3, [[1,2], [1, 3], [3, 4]], 1));