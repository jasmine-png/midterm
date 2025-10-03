function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    let position = 0;

    do {
        position = (position + k) % n;
        energy -= 1 + 2 * c[position];
    } while (position !== 0);

    return energy;
}
