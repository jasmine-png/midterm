function circularArrayRotation(a, k, queries) {
    let n = a.length;
    let result = [];

    k = k % n;

    for (let q of queries) {
        let index = (q - k + n) % n;
        result.push(a[index]);
    }

    return result;
}
