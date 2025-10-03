function howManyGames(p, d, m, s) {
    let count = 0;
    while (s >= p) {
        s -= p;         
        count++;         
        p = Math.max(p - d, m); 
    }
    return count;
}