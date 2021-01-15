var array = [1, 2, 3, 4, 5, 6, 7, 8]
var item = 7;


function recursiveBinarySearch(array, item, low, high){
    
    if(low <= high){

        let mid = Math.floor((low + high) / 2);
        
        if(array[mid] == item)
            return mid;

        if(array[mid] > item){
            high = mid - 1;
            return recursiveBinarySearch(array, item, low, high); 
        }
           
        if(array[mid] < item){
            low = mid + 1;
            return recursiveBinarySearch(array, item, low, high);
        }
    }
    
    return "num incrontramu nadis"
}



//console.log(recursiveBinarySearch(array, item, low, high));


console.log(recursiveBinarySearch2(array, item));