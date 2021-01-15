function quickSort(array){
    if(array.length < 2)
        return array;
    
    let pivot = array[0];

    let less = [];
    let greater = [];

    array.forEach(element => {
        if(element > pivot){
            greater.push(element);
        }else if (element < pivot){
            less.push(element);
        }
    });
     
    return Array.prototype.concat(quickSort(less), pivot, quickSort(greater));
}


console.log(quickSort([15, 33, 10, 2, 15]));