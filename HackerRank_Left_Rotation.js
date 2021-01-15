function rotLeft(a, d) {
    let rotadedArray = [...a];
    let newPosition;

    for (let index = 0; index < a.length; index++) {
        newPosition = index - d;
        while (newPosition < 0) {
            newPosition = newPosition + a.length;
        }
        rotadedArray[newPosition] = a[index];
    }
    return rotadedArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))