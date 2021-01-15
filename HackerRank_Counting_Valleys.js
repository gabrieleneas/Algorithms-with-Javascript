function valleys(steps, path) {
    //debugger
    let lvl = 0;
    let valleys = 0;

    for (let index = 0; index < steps; index++) {
        const element = path[index];
        if (element == "D") lvl--;

        if (element == "U") lvl++;

        if (lvl == 0 && element == "U") {
            valleys++
        }
    }
    return valleys;
}

console.log(valleys(10, "DUDDDUUDUU"));
