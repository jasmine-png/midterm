function bigSorting(unsorted) {
    unsorted.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });
    return unsorted;
}