"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4*a*c;
  if (discr < 0) {
    arr = [];
  }
  else  if (discr === 0) {
    let root = -b / (2 * a)
    arr = [root];
  }
  else if (discr > 0) {
    let root1 = (-b + Math.sqrt(discr) )/(2*a);
    let root2 = (-b - Math.sqrt(discr) )/(2*a);
    arr = [root1, root2]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 1200;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths)-1)));
  let totalAmount = (monthPayment * countMonths).toFixed(2);

  return Number(totalAmount);

}