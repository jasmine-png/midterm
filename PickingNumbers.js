function pickingNumbers(a) {
    const freq = Array(101).fill(0); 

    for (let num of a) {
        freq[num]++;
    }

    let maxLength = 0;

    for (let i = 1; i <= 100; i++) {
        const currentLength = freq[i] + freq[i - 1];
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}
