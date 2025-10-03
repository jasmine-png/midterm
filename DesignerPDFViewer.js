function designerPdfViewer(h, word) {
    let maxHeight = 0;

    for (let char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0); // get 0-based index
        if (h[index] > maxHeight) {
            maxHeight = h[index];
        }
    }

    return maxHeight * word.length;
}
