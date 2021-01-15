function findSmallest(array){
    let smallestVal = array[0];
    let smallestIndex = 0;
  
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
     
        if (element < smallestVal) {
            smallestVal = element;
            smallestIndex = index;
        }    
    }

    return smallestIndex;
}

function selectionSort(array){
    let newArr = [];
    let n = array.length;
    for (let index = 0; index < n; index++) {
        let smallest = findSmallest(array);
        newArr.push(array[smallest]);        
        array.splice(smallest, 1);
    }
    return newArr;
}

console.log(selectionSort([8,4,67,23,21,100]));