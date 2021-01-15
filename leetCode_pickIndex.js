function returnWeight(array){
    let sum = array.reduce((acc, i) => acc + i);
    let arr = array.map(i => Math.floor((i / sum) * 100));
    return arr;
}


function pickIndex(array){
    
    let sortedArray = array.sort();
    let random = Math.floor((Math.random() * 100));
    let initial = 0;
    let final = 0;
    let weights = returnWeight(sortedArray);

    for (let index = 0; index < array.length; index++) {
        final += weights[index] ;

        if(random >= initial  && random <= final)
            return index;
        
        initial = final + 1;
    }

    return 'exception'
}

console.log(pickIndex([1, 2, 3]));
console.log(pickIndex([1, 2, 3]));
console.log(pickIndex([1, 2, 3]));
console.log(pickIndex([1, 2, 3]));
console.log(pickIndex([1, 2, 3]));

