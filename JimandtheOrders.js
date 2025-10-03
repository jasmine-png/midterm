function jimOrders(orders) {
    let customers = orders.map((order, index) => {
        return {
            id: index + 1,
            time: order[0] + order[1]
        };
    });
    customers.sort((a, b) => {
        if (a.time === b.time) {
            return a.id - b.id;
        }
        return a.time - b.time;
    });

    return customers.map(c => c.id);
}