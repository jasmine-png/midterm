
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let landingSpot = a + apples[i]; 
        if (landingSpot >= s && landingSpot <= t) {
            appleCount++;
        }
    }

    for (let j = 0; j < oranges.length; j++) {
        let landingSpot = b + oranges[j];  
        if (landingSpot >= s && landingSpot <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
