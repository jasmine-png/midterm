function minimumDistances(a) {
    const lastIndex = new Map(); 
    let minDist = Infinity;

    for (let i = 0; i < a.length; i++) {
        const value = a[i];
        if (lastIndex.has(value)) {
            const dist = i - lastIndex.get(value);
            if (dist < minDist) {
                minDist = dist;
            }
        }
        lastIndex.set(value, i);
    }

    return minDist === Infinity ? -1 : minDist;
}
