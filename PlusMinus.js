function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0;
    const n = arr.length;

    for (let num of arr) {
        if (num > 0) pos++;
        else if (num < 0) neg++;
        else zero++;
    }

    console.log((pos / n).toFixed(6));
    console.log((neg / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
