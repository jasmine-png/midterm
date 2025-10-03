function stones(n, a, b) {
    const result = new Set();
    for (let i = 0; i < n; i++) {
        const value = i * a + (n - 1 - i) * b;
        result.add(value);
    }
    return Array.from(result).sort((x, y) => x - y);
}
