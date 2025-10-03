function gameOfThrones(s) {
    const freq = {};
    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    let oddCount = 0;
    for (const key in freq) {
        if (freq[key] % 2 !== 0) oddCount++;
    }
    return oddCount > 1 ? "NO" : "YES";
}