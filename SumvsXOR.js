
function sumXor(n) {
    if (n === 0) return 1;

    let countZeroBits = 0;
    let temp = n;

    while (temp > 0) {
        if ((temp & 1) === 0) {
            countZeroBits++;
        }
        temp >>= 1;
    }

    return 1n << BigInt(countZeroBits);
}