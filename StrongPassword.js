function minimumNumber(n, password) {
    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    const specialChars = "!@#$%^&*()-+";

    for (const ch of password) {
        if (/\d/.test(ch)) hasDigit = true;
        else if (/[a-z]/.test(ch)) hasLower = true;
        else if (/[A-Z]/.test(ch)) hasUpper = true;
        else if (specialChars.includes(ch)) hasSpecial = true;
    }

    let missing = 0;
    if (!hasDigit) missing++;
    if (!hasLower) missing++;
    if (!hasUpper) missing++;
    if (!hasSpecial) missing++;

    return Math.max(missing, 6 - n);
}