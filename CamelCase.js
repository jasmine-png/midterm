function camelcase(s) {
    let count = 1; 
    for (const c of s) {
        if (c >= 'A' && c <= 'Z') count++;
    }
    return count;
}