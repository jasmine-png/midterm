function alternate(s) {
    const uniqueChars = [...new Set(s)];
    let maxLength = 0;

    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const a = uniqueChars[i];
            const b = uniqueChars[j];

            const filtered = [...s].filter(ch => ch === a || ch === b).join('');

            let valid = true;
            for (let k = 1; k < filtered.length; k++) {
                if (filtered[k] === filtered[k - 1]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                maxLength = Math.max(maxLength, filtered.length);
            }
        }
    }

    return maxLength;
}
