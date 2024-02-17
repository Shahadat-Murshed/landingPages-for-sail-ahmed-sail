function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number" || isNaN(livingCost)) {
        return "Invalid input";
    } else {
        const incomeAfterTaxArray = arr.map((item) => {
            if (item >= 3000) {
                return item * 0.8;
            } else {
                return item;
            }
        });

        const incomeAfterTax = incomeAfterTaxArray.reduce((acc, curr) => acc + curr, 0);

        if (incomeAfterTax - livingCost >= 0) {
            return incomeAfterTax - livingCost;
        } else {
            return "earn more";
        }
    }
}
