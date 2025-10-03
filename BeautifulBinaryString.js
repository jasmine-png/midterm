function beautifulBinaryString(b) {
    let changes = 0;

    for (let i = 0; i < b.length - 2; ) {
        if (b.substring(i, i + 3) === "010") {
            changes++;
            i += 3; 
        } else {
            i++;
        }
    }

    return changes;
}
