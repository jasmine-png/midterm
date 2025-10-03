function theLoveLetterMystery(s) {
    let operations = 0;
    let n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let left = s.charCodeAt(i);
        let right = s.charCodeAt(n - i - 1);
        operations += Math.abs(left - right);
    }

    return operations;
}
