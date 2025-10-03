function getTotalX(a, b) {
    let count = 0;

    const maxNum = Math.max(...b);

    for (let x = 1; x <= maxNum; x++) {
        let validA = a.every(num => x % num === 0);

        let validB = b.every(num => num % x === 0);

        if (validA && validB) {
            count++;
        }
    }

    return count;
}
