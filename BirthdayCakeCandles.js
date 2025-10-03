function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    const count = candles.filter(c => c === maxHeight).length;
    return count;
}
