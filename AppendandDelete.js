
function appendAndDelete(s, t, k) {

    let commonLength = 0;
    while (commonLength < s.length && commonLength < t.length && s[commonLength] === t[commonLength]) {
        commonLength++;
    }

    let totalOps = (s.length - commonLength) + (t.length - commonLength);

    if (totalOps > k) {
        return "No";
    } else if ((k - totalOps) % 2 === 0) {
        return "Yes";
    } else if (k >= s.length + t.length) {
      
        return "Yes";
    } else {
        return "No";
    }
}
