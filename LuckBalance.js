function luckBalance(k, contests) {
    let important = [];
    let luck = 0;

    for (const [l, t] of contests) {
        if (t === 1) {
            important.push(l);
        } else {
            luck += l;
        }
    }

    important.sort((a, b) => b - a);

    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            luck += important[i];
        } else {
            luck -= important[i];
        }
    }

    return luck;
}