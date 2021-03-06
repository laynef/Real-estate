export const fixedMonthlyMortage = (pricinipal: number, interestRate: number, totalYears: number): number =>
    pricinipal * (interestRate / 12) * (Math.pow(1 + (interestRate / 12), (totalYears * 12)) / (Math.pow(1 + (interestRate / 12), (totalYears * 12)) - 1));

export const payPrinicipal = (your_payment: number, pricinipal: number, interestRate: number, totalPayments: number): number => {
    const payment = fixedMonthlyMortage(pricinipal, interestRate, totalPayments);
    if (your_payment > payment) {
        pricinipal -= (your_payment - payment);
        return pricinipal;
    } else {
        // TODO: Calculate prinicipal on lower payment
        return pricinipal + (payment - your_payment);
    }
};

export const payOffTime = (your_payment: number, pricinipal: number, interestRate: number, totalPayments: number): number => {
    let month = 0;
    while (pricinipal > 0) {
        pricinipal = payPrinicipal(your_payment, pricinipal, interestRate, totalPayments);
        month += 1;
    }
    return month;
}
