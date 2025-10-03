function twoStrings(s1, s2) {
    const set1 = new Set(s1);
    for (const c of s2) {
        if (set1.has(c)) {
            return "YES";
        }
    }
    return "NO";
}