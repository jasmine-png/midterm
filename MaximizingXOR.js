function maximizingXor(l, r) {
    let xor = l ^ r;
    let msb = 1;

    while (xor > 0) {
        msb <<= 1;
        xor >>= 1;
    }

    return msb - 1;
}
