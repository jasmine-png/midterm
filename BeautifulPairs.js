function beautifulPairs(A, B) {
    let freqA = new Map();
    let freqB = new Map();

    for (let num of A) {
        freqA.set(num, (freqA.get(num) || 0) + 1);
    }

    for (let num of B) {
        freqB.set(num, (freqB.get(num) || 0) + 1);
    }

    let matches = 0;
    for (let [num, countA] of freqA) {
        let countB = freqB.get(num) || 0;
        matches += Math.min(countA, countB);
    }

    if (matches === A.length) {
        return matches - 1;
    } else {
        return matches + 1;
    }
}
