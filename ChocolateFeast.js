function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let extra = Math.floor(wrappers / m);
        chocolates += extra;
        wrappers = (wrappers % m) + extra; 
    }

    return chocolates;
}

