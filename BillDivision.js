function bonAppetit(bill, k, b) {
    let total = 0;

    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }

    let fairShare = total / 2;

    if (b === fairShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - fairShare);
    }
}
