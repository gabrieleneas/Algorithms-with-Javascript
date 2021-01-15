const palindromePermutation = (string) => {

    const map = new Map();
    let str = string.toLowerCase();

    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }


     if (str.length % 2 == 0) {
         for (const key of str) {
             if (map.get(key) == 1) {
                 return false;
             }
         }
     }


     if (str.length % 2 == 1) {
         let count = 0;
         for (const char of str) {
             if (map.get(char) == 1) {
                 count++;
                 if(count > 1) return false;
             }
         }
     }


    return true;
}




console.log(palindromePermutation("subinooownibus"));




    // if (str.length % 2 == 0) {
    //     for (const key of str) {
    //         if (map.get(key) == 1) {
    //             return false;
    //         }
    //     }
    // }


    // if (str.length % 2 == 1) {
    //     let count = 0;
    //     for (const char of str) {
    //         if (map.get(char) == 1) {
    //             count++;
    //             if(count > 1) return false;
    //         }
    //     }
    // }