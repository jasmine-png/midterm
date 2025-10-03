function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1;
    }

    let mid = s.length / 2;
    let s1 = s.slice(0, mid);
    let s2 = s.slice(mid);

   
    let freq = {};
    for (let ch of s2) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let changes = 0;

  
    for (let ch of s1) {
        if (freq[ch]) {
            freq[ch]--; 
        } else {
            changes++; 
        }
    }

    return changes;
}
