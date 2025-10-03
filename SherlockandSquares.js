function squares(a, b) {
    const start = Math.ceil(Math.sqrt(a));
    const end = Math.floor(Math.sqrt(b));

    return end >= start ? end - start + 1 : 0;
}

