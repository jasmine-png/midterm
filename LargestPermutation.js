function largestPermutation(k, arr) {
    let n = arr.length;
    let pos = {};

    for (let i = 0; i < n; i++) {
        pos[arr[i]] = i;
    }

    for (let i = 0; i < n && k > 0; i++) {
        let expected = n - i;

        if (arr[i] !== expected) {
            let idxToSwap = pos[expected];

            pos[arr[i]] = idxToSwap;
            pos[expected] = i;

            [arr[i], arr[idxToSwap]] = [arr[idxToSwap], arr[i]];

            k--;
        }
    }

    return arr;
}
