function strangeCounter(t) {
    let start = 1;
    let value = 3;

    while (t > start + value - 1) {
        start += value;
        value *= 2;
    }

    return value - (t - start);
}
