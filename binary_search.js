var array = [1, 2, 3, 4, 5, 6, 7, 8]
var low = 0;
var high = array.length - 1;
var mid = 0;
var guess = 0;
var item = 9;

function binarySearch(array, item){
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        guess = array[mid];
        
        if(guess == item){
            return mid;
        }

        if(guess > item){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return "not found";    
}


console.log(binarySearch(array, item));

