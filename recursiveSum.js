function countdown(i){
    console.log(i);
    if(i <= 0)
        return;
    else
        countdown(i - 1);
}



function sum(array){
    if(array.length === 0){
        return 0
    }

    return array[0] + sum(array.slice(1));
}

function fact(x){

    if(x == 1)
        return 1;
    
    return x * fact(x-1);
}




function countIt(array){
    if(array.length === 0){
        return 0
    }

    return 1 + countIt(array.slice(1));
}

console.log(countIt([1,3,4,5]));