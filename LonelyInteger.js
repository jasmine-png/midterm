function lonelyinteger(a) {
    let result = 0;
    for (let num of a) {
        result ^= num; 
    }
    return result;
}
