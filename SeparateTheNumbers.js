function separateNumbers(s) {
    const n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        let firstNum = BigInt(s.substring(0, len));

        if (s[0] === '0') return console.log("NO");

        let current = firstNum;
        let built = "";

        while (built.length < n) {
            built += current.toString();
            current++;
        }

        if (built === s) {
            console.log("YES " + firstNum);
            return;
        }
    }

    console.log("NO");
}

