function flatlandSpaceStations(n, c) {

    c.sort((a, b) => a - b);


    let maxDist = c[0];

    for (let i = 1; i < c.length; i++) {
        let dist = Math.floor((c[i] - c[i - 1]) / 2);
        maxDist = Math.max(maxDist, dist);
    }

    maxDist = Math.max(maxDist, (n - 1) - c[c.length - 1]);

    return maxDist;
}

