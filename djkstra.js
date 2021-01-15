const graph = {
    A: { B: 5, C: 2 },
    B: { D: 8 },
    C: { D: 3, E: 10 },
    D: { E: 4 },
    E: { A: 1 }
}


const findLowestCost = (costs, processed) => {
    let lowestCost = Infinity;
    let lowestCostNode;
    for (const node in costs) {
        if (costs[node] < lowestCost && !processed.includes(node)) {
            lowestCost = costs[node];
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

function generateOptmalPath = (finish, parents, start) => {
    let optmalPath = `=> ${finish}`;
    let parent = parents[finish];

    while (parent != start) {
        optmalPath = `=> ${parent} ` + optmalPath;
        parent = parents[parent];
    }
    optmalPath = `${start} ` + optmalPath;
    return optmalPath;
}



const djkstra = (graph, start, finish) => {
    const costs = [];
    for (const cost in graph) {
        costs[cost] = Infinity;
    }
    const parents = [];
    let node = start;
    let processed = [];
    while (node) {
        let cost = null;

        if (node == start) {
            cost = 0;
        } else {
            cost = costs[node];
        }

        let neighbors = graph[node];

        for (const index in neighbors) {
            let newCost = cost + neighbors[index];
            if (newCost < costs[index]) {
                costs[index] = newCost;
                parents[index] = node;
            }
        }
        processed.push(node);
        node = findLowestCost(costs, processed);
    }


    let optmalPath = generateOptmalPath(finish, parents, start);

    console.log(optmalPath)
}


djkstra(graph, "A", "A");

