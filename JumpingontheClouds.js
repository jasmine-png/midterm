function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    const n = c.length;

    while (i < n - 1) {
       
        if (i + 2 < n && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }

    return jumps;
}

