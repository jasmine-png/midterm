function climbingLeaderboard(ranked, player) {
    const uniqueRanks = [...new Set(ranked)];

    const n = uniqueRanks.length;
    const result = [];
    let i = n - 1; 

    for (let score of player) {
        while (i >= 0 && score >= uniqueRanks[i]) {
            i--;
        }
        result.push(i + 2); 
    }

    return result;
}
