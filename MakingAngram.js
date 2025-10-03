function makingAnagrams(s1, s2) {
    const freq1 = {};
    const freq2 = {};

    for (const c of s1) {
        freq1[c] = (freq1[c] || 0) + 1;
    }
    for (const c of s2) {
        freq2[c] = (freq2[c] || 0) + 1;
    }

    let deletions = 0;
    const allChars = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);
    for (const c of allChars) {
        deletions += Math.abs((freq1[c] || 0) - (freq2[c] || 0));
    }
    return deletions;
}