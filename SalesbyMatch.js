function sockMerchant(n, ar) {
    let colorCount = {};
    let pairs = 0;

    for (let sock of ar) {
        if (colorCount[sock]) {
            colorCount[sock]++;
        } else {
            colorCount[sock] = 1;
        }
    }

    for (let color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }

    return pairs;
}
