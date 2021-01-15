

const rotateLeft = (n, arr) => {

    const rotatedArr = [...arr];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let newPosition = index - n;
        if (newPosition < 0) {
            rotatedArr[arr.length + newPosition] = element;
        } else {
            rotatedArr[newPosition] = element;
        }
    }

    return rotatedArr;
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));