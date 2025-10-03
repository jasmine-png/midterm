function permutationEquation(p) {


}function permutationEquation(p) {
    let n = p.length;
    let pos = {};
    let result = [];

    for (let i = 0; i < n; i++) {
        pos[p[i]] = i + 1;
    }

    for (let x = 1; x <= n; x++) {
        let first = pos[x];
        let second = pos[first];
        result.push(second);
    }

    return result;
}

