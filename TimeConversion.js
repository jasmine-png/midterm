function timeConversion(s) {
    let period = s.slice(-2);      
    let [hh, mm, ss] = s.slice(0, -2).split(":");

    hh = parseInt(hh, 10);

    if (period === "AM") {
        if (hh === 12) hh = 0;
    } else {
        if (hh !== 12) hh += 12;
    }

    return `${hh.toString().padStart(2, "0")}:${mm}:${ss}`;
}
