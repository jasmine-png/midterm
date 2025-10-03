function insertionSort(N, arr) {
    for (let i = 1; i < N; i++) {
        let value = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = value;
    }

    console.log(arr.join(' '));
}