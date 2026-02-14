/* Write a function named 'maketea' that takes one parameter, 'typeoftea', and returns a string like "'Making green tea'" when called with "green tea" Store the result in a variable named 'teaOrder'. */

function makeTea(typeoftea) {
  return `Making ${typeoftea}`;
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

/* Create a function named 'order tea' that takes one parameter, 'teaType'.Inside this function,create aother function named 'confirmOrder' that returns a message like "Order confirmed for chai". Call 'confirmOrder'from within 'orderTea' and return the result */

function orderTea(teaType) {
  function confirmOrder() {
    return `Ordered confirmed for chai ${teaType}`;
  }
  return confirmOrder();
}
let result = orderTea("dhurandhar tea");
console.log(result);

//arrow function
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalcost = calculateTotal(5, 20);
console.log(totalcost);

/* Write a function named 'Processteaorder' that takes another function 'makeTea' as a parameter and calls it with the argument 'earl grey'. Return the result of calling 'makeTea'.
 */
//higher orderfunction
function maketea(typeofteass) {
  return `make tea: ${typeofteass}`;
}

function Processteaorder(teafunction) {
  return teafunction("earl grey");
}

let order = Processteaorder(makeTea);
console.log(order);

//Closure concept

function createateamaker(name) {
  let score = 1200;
  return function teamaker(teatype) {
    return `Making ${teatype} ${name} ${score}`;
  };
}

let teamaker = createateamaker("Mohit");
let resulted = teamaker("green tea");
console.log(resulted);

function sumOfN(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

let abc = sumOfN(10);
console.log(abc);

function printMultiplicationTable(n) {
  let b = 1;
  let ans;
  while (b<=10) {
    ans = n * b;
    console.log(`${n} * ${b} = ${n*b}`);
    b++;
  }
}

console.log(printMultiplicationTable(3));
