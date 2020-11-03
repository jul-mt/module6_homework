
function sum (num1) {
  return function (num2) {

    return num1 + num2;
  } 
}

const sumHighOrder = sum(5);
const sumLowOrder = sumHighOrder(7);
console.log(sumLowOrder);