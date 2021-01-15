var numberOfApples = 0;
    var numberOfOranges = 0;

    for(let i = 0; i < apples.length; i++){
        if((apples[i] + a) >= s && (apples[i] + a) <= t)
            numberOfApples++;
    }

    for(let i = 0; i < oranges.length; i++){
        if((oranges[i] + b) >= s && (oranges[i] + b) <= t)
            numberOfOranges++;
    }

    console.log(numberOfApples);
    console.log(numberOfOranges);