function nimbleGame(s) {
    let xorSum = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 !== 0) {
            xorSum ^= i;
        }
    }

    return xorSum === 0 ? "Second" : "First";
}
