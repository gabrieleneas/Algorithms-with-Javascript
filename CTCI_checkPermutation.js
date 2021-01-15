const checkPermutation = (string, string2) => {
    for (const element of string){
       if(string2.indexOf(element) == -1)
           return false;   
    }
    return true;
}



const checkPermutationHashMap = (string, string2) =>{
    const mapString = stringToMap(string);
    const mapString2 = stringToMap(string2);
    
    for (const iterator of string) {
        let value = mapString.get(iterator);
        let value2 = mapString2.get(iterator);

        if(value != value2){
            return false;
        }
    }
    return true;
}

function stringToMap(string) {
    const map =  new Map();
    for (const iterator of string) {
        if (map.has(iterator)) {
            map.set(iterator, map.get(iterator) + 1);
        } else {
            map.set(iterator, 1);
        }
    }
    return map;
}


console.log(checkPermutationHashMap("dracula", "wlucard"));