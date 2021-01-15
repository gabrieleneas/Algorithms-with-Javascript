const sockMerchant = (n, arr) => {
    let socks = new Map();
    let pairs = 0;

    arr.forEach(element => {
        if (socks.has(element)) {
            socks.set(element, socks.get(element) + 1);
        } else {
            socks.set(element, 1);
        }
    });

    for (const [key, value] of socks) {
        let numberOfSocks = Math.floor(value / 2);
        pairs += numberOfSocks;
    }

    return pairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));