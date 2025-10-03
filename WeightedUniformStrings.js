function weightedUniformStrings(s, queries) {
    const weights = new Set();
    let currentChar = '';
    let currentCount = 0;

    for (let ch of s) {
        if (ch === currentChar) {
            currentCount++;
        } else {
            currentChar = ch;
            currentCount = 1;
        }

        const weight = (ch.charCodeAt(0) - 96) * currentCount;
        weights.add(weight);
    }

    return queries.map(q => (weights.has(q) ? 'Yes' : 'No'));
}

