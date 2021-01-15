function minimumBribes(q) {
    let bribed = 0;
    let chaotic = false;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < q.length - 1; i++) {
            let n = q[i];
            let oldIndex = n - 1;
            let newIndex = i;
            let bribes = oldIndex - newIndex;
            if (bribes > 2) {
                chaotic = true;
                break;
            } else if (n > q[i + 1]) {
                let temp = n;
                q[i] = q[i + 1];
                q[i + 1] = temp;
                bribed++;
                swapped = true;
            }

        }

    } while (swapped == true);      
       
    chaotic ? console.log("Too chaotic") : console.log(bribed);

}

console.log(minimumBribes([2, 1, 5, 3, 4]));




