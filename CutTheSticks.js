
function cutTheSticks(arr) {
    let result = [];

    arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        result.push(arr.length);

        let minStick = arr[0];

        arr = arr.map(x => x - minStick).filter(x => x > 0);
    }

    return result;
}

