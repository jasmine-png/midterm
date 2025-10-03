'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'toys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY w as parameter.
 */

function toys(w) {
    // Sort weights first
    w.sort((a, b) => a - b);

    let groups = 0;
    let i = 0;

    while (i < w.length) {
        let minWeight = w[i];
        groups++;

        while (i < w.length && w[i] <= minWeight + 4) {
            i++;
        }
    }

    return groups;
}
