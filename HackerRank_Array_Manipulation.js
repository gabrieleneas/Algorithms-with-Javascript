// function arrayManipulation(n, queries) {
//     let array = Array(n).fill(0);

//     for (let i = 0; i < queries.length; i++) {
//         let from = queries[i][0];
//         let to = queries[i][1];
//         let value = queries[i][2];

//         for (let j = from - 1; j <= to - 1; j++) {
//             array[j] += value;
//         }
//     }

//     return maximumValue(array);
// }

// function maximumValue(arr) {
//     let max = 0;

//     for (const i of arr)
//         if (i > max) max = i;

//     return max;
// }

//console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));



function arrayManipulation2(n, queries) {
    let array = Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let from = queries[i][0];
        let to = queries[i][1];
        let value = queries[i][2];

        array[]

    }


    return maximumValue2();
}

function maximumValue2(arr) {
    let max = 0;

    for (const i of arr)
        if (i > max) max = i;

    return max;
}

console.log(arrayManipulation2(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));