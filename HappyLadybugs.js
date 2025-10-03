function happyLadybugs(b) {
    const freq = {};
    let hasEmpty = false;

    for (const c of b) {
        if (c === '_') {
            hasEmpty = true;
        } else {
            freq[c] = (freq[c] || 0) + 1;
        }
    }

    for (const c in freq) {
        if (freq[c] === 1) {
            return "NO";
        }
    }

    if (hasEmpty) {
        return "YES";
    } else {
        const n = b.length;
        for (let i = 0; i < n; i++) {
            if ((i > 0 && b[i] === b[i - 1]) || (i < n - 1 && b[i] === b[i + 1])) {
                continue;
            } else {
                return "NO";
            }
        }
        return "YES";
    }
}
