function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return `Invalid Number`;
    } else {
        let money = ticketSale * 120 - (500 + 8 * 50);
        return money;
    }
}