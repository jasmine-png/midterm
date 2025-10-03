function misereNim(s) {
    let xorSum = s.reduce((acc, val) => acc ^ val, 0);
    const allOnes = s.every(val => val === 1);

    if (allOnes) {
        
        return (s.length % 2 === 0) ? "First" : "Second";
    } else {
     
        return xorSum === 0 ? "Second" : "First";
    }
}

