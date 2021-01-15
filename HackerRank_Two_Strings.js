function twoStrings(s1, s2) {
    let biggestString = '';
    let smallestString = '';
    let share = false;

    if (s1.length >= s2.length) {
        biggestString = s1
        smallestString = s2
    } else {
        biggestString = s2
        smallestString = s1
    }

    for (let index = 0; index < smallestString.length; index++) {
        if (smallestString.includes(biggestString[index])) {
            share = true;
            break;
        }
    }
    return share ? "Yes" : "No";
}

console.log(twoStrings("hello", "world"))