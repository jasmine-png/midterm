function runningTime(arr) {
    let shifts = 0;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let value = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            shifts++; // count each shift
            j--;
        }
        arr[j + 1] = value;
    }
    return shifts;
}