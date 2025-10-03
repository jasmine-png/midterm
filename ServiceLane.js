function serviceLane(n, cases, width) {
    let result = [];

    for (let [start, end] of cases) {
        let minWidth = Infinity;

        for (let k = start; k <= end; k++) {
            minWidth = Math.min(minWidth, width[k]);
        }

        result.push(minWidth);
    }

    return result;
}
