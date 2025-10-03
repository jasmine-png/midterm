function migratoryBirds(arr) {
    let counts = new Map();

    for (let bird of arr) {
        counts.set(bird, (counts.get(bird) || 0) + 1);
    }

    let maxCount = 0;
    let minId = Number.MAX_SAFE_INTEGER;

    for (let [id, count] of counts) {
        if (count > maxCount || (count === maxCount && id < minId)) {
            maxCount = count;
            minId = id;
        }
    }

    return minId;
}
