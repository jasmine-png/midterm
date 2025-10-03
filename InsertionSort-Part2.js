function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements greater than key one step ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;

        printArray(arr);
    }
}