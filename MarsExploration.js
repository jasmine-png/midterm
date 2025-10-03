function marsExploration(s) {
    let count = 0;
    const pattern = "SOS";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== pattern[i % 3]) {
            count++;
        }
    }
    return count;
}