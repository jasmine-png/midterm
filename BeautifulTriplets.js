function beautifulTriplets(d, arr) {
    let n = arr.length;
    let count = 0;

    // Use three pointers approach
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            if (arr[j] - arr[i] !== d) continue;
            for (let k = j + 1; k < n; k++) {
                if (arr[k] - arr[j] === d) {
                    count++;
                }
            }
        }
    }
    return count;
}