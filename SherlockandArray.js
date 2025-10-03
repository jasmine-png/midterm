function balancedSums(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === total - leftSum - arr[i]) {
            return "YES";
        }
        leftSum += arr[i];
    }
    return "NO";
}