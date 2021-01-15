function isValid(s) {
    const map = {};
    const frequencies = {};
    let mostOcurrNumber = 0;
    let removeTimes = 0;
    let isValid = true;

    for (const i of s) {
        map[i] = (map[i] || 0) + 1;
    }

    for (const i in map) {
        frequencies[map[i]] = (frequencies[map[i]] || 0) + 1;
    }

    for (const i in frequencies) {
        if (frequencies[i] > mostOcurrNumber)
            mostOcurrNumber = i;
    }

    for (const i in map) {
        if (map[i] != mostOcurrNumber)
            removeTimes++;

        if (map[i] - 1 > mostOcurrNumber || removeTimes > 1) {
            isValid = false;
            break;
        }

    }

    return isValid ? "YES" : "NO";
}

console.log(isValid("aaaabbcc"));