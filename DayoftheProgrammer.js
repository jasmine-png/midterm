function dayOfProgrammer(year) {
    if (year === 1918) {
        return `26.09.${year}`;
    }

    let isLeap;
    if (year < 1918) {
     
        isLeap = (year % 4 === 0);
    } else {
     
        isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    }

    if (isLeap) {
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
    }
}
