const jumpingOnTheClouds = (c) => {
    let jumps = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] == 0) {
            i = i + 2;
            jumps++;
        } else {
            i = i + 1;
            jumps++;
        }
    }
    return jumps;
}

console.log(jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0]));

