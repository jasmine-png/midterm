function kaprekarNumbers(p, q) {
    let found = false;
    let result = [];
    for (let i = p; i <= q; i++) {
        let sq = BigInt(i) * BigInt(i);
        let s = sq.toString();
        let d = s.length;
        let r_len = i.toString().length;

        let right = s.substring(d - r_len);
        let left = (d - r_len > 0) ? s.substring(0, d - r_len) : "0";

        let lnum = parseInt(left, 10);
        let rnum = parseInt(right, 10);

        if (lnum + rnum === i) {
            result.push(i);
            found = true;
        }
    }
    if (!found) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(' '));
    }
}