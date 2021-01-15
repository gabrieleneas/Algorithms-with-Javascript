const stringCompression = (string) => {
 
    let compressedStr = "";
    let temp = string[0];
    let count = 0;
    
    for (const char of string) {

        if(char == temp){
            count++;
        }else{
            compressedStr += `${temp}${count}`
            count = 1;
            temp = char;
        }
        
    }

    compressedStr += `${temp}${count}`
    
    return compressedStr;
}

console.log(stringCompression("aabcccccaaa"));

//output: a4b2c4