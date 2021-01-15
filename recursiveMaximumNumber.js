var array = [1, 3, 23, 4 , 5];


function maximumNumber(arr, max){

    if(arr.length == 0)
        return max;

    if(arr[0] > max)
        max = arr[0];
          
    return maximumNumber(arr.slice(1), max);
}

console.log(maximumNumber(array, max = 0));