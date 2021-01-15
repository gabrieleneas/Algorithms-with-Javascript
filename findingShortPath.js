const problem = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: ['E'],
    E: []
}




const findingShortPath = (graph, start, finish) => {

    let parents = { start: null };

    let processed = [];

    let queue = [start];

    while (queue.length > 0) {
        let node = queue.pop();

        if (node == finish) {
            break;
        }

        if (!processed.includes(node)) {
            let neighbors = graph[node];

            for (const neighbor of neighbors) {
                parents[neighbor] = node;
                queue.push(neighbor);
            }

            processed.push(node);
        }
    }

    let optmalPath = createOptmalPath(finish, parents, start);

    return optmalPath;

}

function createOptmalPath(finish, parents, start) {
    let optmalPath = `=> ${finish}`;
    let parent = parents[finish];
    debugger
    while (parent != start) {
        optmalPath = `=> ${parent} ` + optmalPath;
        parent = parents[parent];
    }
    optmalPath = `=> ${start} ` + optmalPath;

    return optmalPath;
}


console.log(findingShortPath(problem, 'A', 'E'));