function equalizeArray(arr) {
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let maxFreq = 0;
    for (const key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
        }
    }
    return arr.length - maxFreq;
}