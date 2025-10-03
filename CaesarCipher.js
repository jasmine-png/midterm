function caesarCipher(s, k) {
    let result = '';
    k = k % 26; 

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (/[a-zA-Z]/.test(c)) {
            let base = (c >= 'a' && c <= 'z') ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let code = ((c.charCodeAt(0) - base + k) % 26) + base;
            result += String.fromCharCode(code);
        } else {
            result += c;
        }
    }
    return result;
}
