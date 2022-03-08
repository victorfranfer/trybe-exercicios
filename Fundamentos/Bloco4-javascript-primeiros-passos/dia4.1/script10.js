const unitaryProductionCost = 10;
const unitaryResellingValue = 15;
const unitaryProductionCostTax = unitaryProductionCost * 1.2;
//let unitaryProfit = unitaryResellingValue - unitaryProductionCost;

//console.log("Unitary profit is", unitaryProfit, "dollars.");

let totalCost = unitaryProductionCostTax * 1000;
let totalValue = unitaryResellingValue * 1000;

let profit = totalValue - totalCost;

if (unitaryProductionCost < 0 || unitaryResellingValue < 0) {
    console.log("Error");
}
else console.log("Total profit is", profit, "dollars."); 