

function checkMagazine2(magazine, note) {
    let map = {};
    let canBeFormed = true;


    for (const i of magazine)
        map[i] = (map[i] || 0) + 1;

    for (const i of note)
        map[i] = (map[i] || 0) - 1;

    for (const i in map) {
        if (map[i] < 0) {
            canBeFormed = false;
            break;
        }
    }

    canBeFormed ? console.log("Yes") : console.log("No");
}

checkMagazine2(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']);