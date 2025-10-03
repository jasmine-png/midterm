function cavityMap(grid) {
    let n = grid.length;
   
    let result = grid.map(row => row.split(''));

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let cell = grid[i][j];

            if (
                cell > grid[i - 1][j] && 
                cell > grid[i + 1][j] && 
                cell > grid[i][j - 1] && 
                cell > grid[i][j + 1]    
            ) {
                result[i][j] = 'X';
            }
        }
    }

    return result.map(row => row.join(''));
}
