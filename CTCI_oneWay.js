const oneWay = (string, string2) => {
    let edits = 0;

    if(string.length != string2.length)
        edits++;

    for (const char of string2) {
        if(string.indexOf(char) == -1)
            edits++
    }
    console.log(edits);
    return edits > 1 ? false : true;
}


console.log(oneWay("pale", "bake"))