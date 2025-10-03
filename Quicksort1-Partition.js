function quickSort(arr) {
    const pivot = arr[0];
    const left = [];
    const equal = [];
    const right = [];

    for (const x of arr) {
        if (x < pivot) {
            left.push(x);
        } else if (x === pivot) {
            equal.push(x);
        } else {
            right.push(x);
        }
    }

    return [...left, ...equal, ...right];
}
