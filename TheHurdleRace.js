function hurdleRace(k, height) {
    const maxHurdle = Math.max(...height);
    const dosesNeeded = maxHurdle - k;
    return dosesNeeded > 0 ? dosesNeeded : 0;
}
