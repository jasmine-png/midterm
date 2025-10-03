function marcsCakewalk(calorie) {
    // Sort calories in descending order
    calorie.sort((a, b) => b - a);
    let miles = 0;
    for (let i = 0; i < calorie.length; i++) {
        miles += calorie[i] * Math.pow(2, i);
    }
    return miles;
}