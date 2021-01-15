function minimumSwaps(arr) {
    let swaps = 0;
    for (let index = 0; index < arr.length; index++) {

        if (arr[index] != index + 1) {
            swap(arr, index, arr[index] - 1);
            swaps++;
            index--;
        }
    }

    console.log(arr);
    return swaps;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


console.log(minimumSwaps([2, 3, 4, 1, 5]));