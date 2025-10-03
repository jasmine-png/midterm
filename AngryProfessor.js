
function angryProfessor(k, a) {
    let onTimeCount = 0;

    for (let arrival of a) {
        if (arrival <= 0) {
            onTimeCount++;
        }

        if (onTimeCount >= k) {
            return "NO";
        }
    }

    return "YES";
}

