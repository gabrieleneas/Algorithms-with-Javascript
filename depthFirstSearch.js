
const graph = [
    [],
    [4, 2],
    [3, 5, 7, 8],
    [2, 4, 10, 9],
    [1, 3],
    [2, 6, 7, 8],
    [5],
    [2, 5, 8],
    [2, 5, 7],
    [3],
    [3]
]

let steps = 0;


const dfs = (start, finish, visited = []) => {

    steps += 1;
    console.log(start);
    visited.push(start);
    const connections = graph[start];

    for (const conn of connections) {

        if (conn == finish) {
            console.log(`you found ${finish} in ${steps} steps`);
            return;
        }

        if (!visited.includes(conn)) {
            dfs(conn, finish, visited);
        }
    }


}

dfs(1, 7);