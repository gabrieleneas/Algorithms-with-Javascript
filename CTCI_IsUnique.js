
function isUnique(string){
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        
        for (let j = 0; j < string.length; j++) {
            const subElement = string[j];
            
            if(element === subElement &&  i != j){
                return false;
            }
        }        
    }
    return true;
}


const isUniqueHashMap = (string) => {
    const map = new Map();

    for (const element of string) {
        if(map.has(element)){
            return false;
        }else{
            map.set(element, 1);
        }
    }

    return true;
}



