function miniMaxSum(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const minSum = total - Math.max(...arr);
    const maxSum = total - Math.min(...arr);

    console.log(minSum + " " + maxSum);
}
