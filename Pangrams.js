function pangrams(s) {
    s = s.toLowerCase();
    const seen = new Array(26).fill(false);

    for (const c of s) {
        if (c >= 'a' && c <= 'z') {
            seen[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
        }
    }

    for (const present of seen) {
        if (!present) return "not pangram";
    }
    return "pangram";
}