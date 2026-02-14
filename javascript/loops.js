//write a while loop that calculates the sum of the variables from 1 to 5.
let sum = 0;
let i = 1; //initialization
while (i <= 5) {
  //condition
  sum += i;
  i++; // update
}
console.log(sum);

// wrote a while loop that count down from 5 to 1 and stores the numbers in an array named "countdown"
let countdown = [];
let j = 5; //intialization
while (j >= 1) {
  //condition
  countdown.push(j);
  j--; //update
}
console.log(countdown);

// write a 'do while' loop that prompts a user to enter their facorite tea type until they enter their favorite tea type until they enter "stop".store each tea type in an array named teascollection

// let teacollection = [];
// let tea;

// do {
//   tea = prompt('Enter your favourite tea (type "stop" to finish)');
//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");

//write a 'do while' loop that adds number from 1 to 3 and stores the result in a cariable named 'total'.

let total = 0;
let k = 1;

do{
    total = total+k;
    k++;
}while(k<=3)

console.log(total);

//write a for loop that multiplies each element in the array '[2,4,6]' by 2 and stores the results in new array named 'multipliedNumbers'.

let numarray = [2,4,6];
let multipliedNumbers = [];

for (let l = 0; l<numarray.length; l++) {
    multipliedNumbers.push(numarray[l]*2);
}

console.log(multipliedNumbers)

// write a for loop that lists all the cities in the array ["paris","new york","tokyo","London"] and stores each city in a new array named 'citylist'

let cities = ["paris", "new york", "tokyo", "London"];
let citylist = [];

for (let index = 0; index < cities.length; index++) {
    citylist.push(cities[index])
} 

console.log(citylist)