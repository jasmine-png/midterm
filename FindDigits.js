function findDigits(n) {
    let count = 0;
    const digits = n.toString().split('');

    for (let digit of digits) {
        const d = parseInt(digit, 10);
        if (d !== 0 && n % d === 0) {
            count++;
        }
    }

    return count;
}

