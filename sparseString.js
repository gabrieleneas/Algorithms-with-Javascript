
const matchingStrings = (strings, queries) => {

    let arr = [];

    for (const querie of queries) {
        let matches = 0;
        for (const string of strings) {
            if (string === querie) {
                matches++;
            }
        }
        arr.push(matches);
    }

    return arr;
}

console.log(matchingStrings(['ab', 'ab', 'abc', 'bc'], ['ab', 'abc', 'bc']));