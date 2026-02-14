// write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds "chai".store all teas before "chai" in a new array named 'selectedteas'.
let teaflavors = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas= [];
for (let index = 0; index < teaflavors.length; index++) {
    if(teaflavors[index] === "chai"){
        break;
    }
    selectedteas.push(teaflavors[index]);
}
console.log(selectedteas);

//write a 'for' loop thorugh the array ["London","New york","Paris","Berlin"] and skips "Paris".store the other cities in a new array named 'visitedcities'.

let cities = ["London", "New york", "Paris", "Berlin"];
let visitedcities=[];

for (let index = 0; index < cities.length; index++) {
    if(cities[index] === "Paris"){
        continue;
    }
    visitedcities.push(cities[index]);
}

console.log(visitedcities)

//use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.Store thte numbers before '4' in an array named 'small numbers'.

let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
}

//use a 'for-of' loop to iterate through the array ["chai","green-tea","herbal-tea","black-tea"]and skip "herbal-tea".store the other teas in an array named 'preferredteas'

let chai = ["chai", "green-tea", "herbal-tea", "black-tea"];
let  preferredteas = [];

for (const chaipati of chai) {
    if(chaipati=== "herbal-tea"){
        continue;
    }
    preferredteas.push(chaipati);
}
console.log(preferredteas)

/*
use a 'for-in' loop to loop through a object containing city populations. stop the loop when the population of "berlin" is found ans store all previous cities populations in a new object named 'citypopulations'.
let citiespopulation = {
"london": 8900000,
"newyork":8400000,
"Paris":2200000,
"berlin":350000,
};
*/
let citiespopulation = {
  london: 8900000,
  berlin: 350000,
  newyork: 8400000,
  Paris: 2200000,
};
let citynewpopulation = {

}

for(const city in citiespopulation){
    if(city === "berlin"){
        continue;
    }
    citynewpopulation[city] = citiespopulation[city]
}
console.log(citynewpopulation)

/* Use a 'for-in' loop to loop through an object containing city populations. Skip any city wirh a population below 3 millioin and store the rest in a new object named 'largeCities' 
    Skip any city with a population below 3 million and store the rest in a new object named 'largeiCities'

    let worldcities = {
    "Sydney":500000,
    "Tokyo":9000000,
    "berlin": 3500000,
    "paris": 2200000
    };
*/

let worldcities = {
    "Sydney":500000,
    "Tokyo":9000000,
    "berlin": 3500000,
    "paris": 2200000
    };
let largeCities = {

}    

for (const key in worldcities) {
    if(worldcities[key] >=3000000){
        largeCities[key] = worldcities[key]
    }
}
console.log(largeCities);

/* Write  a 'for-each' loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]
Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
*/
let teacollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];


teacollection.forEach(function (tea)  {
    if(tea === "chai"){
        return ; // will stop loop 
    }
    availableTeas.push(tea)
}
);
console.log(availableTeas)

/*  write a 'foreach' loop that iterates through the array ["berlin","tokyo","sydney","Paris"]. skip "Sydney" and store the other cities in a new array named 'traveledcities'*/

let myWorldcities = ['berlin', 'tokyo', 'Sydney','Paris'];

let traveledcities = []
myWorldcities.forEach((city) => {
    if(city === "Sydney"){
        return
    }
    traveledcities.push(city)
});
console.log(traveledcities)

/* Write a 'for' loop that iterates through the array [2,5,7,9].skip the value '7' and multiply the resy by 2 Store the results in a new array named 'doubleNumbers'.
*/
let numbarray = [2,5,7,9]
let doubleNumbers = []

for (const num of numbarray) {
    if (num === 7){
        continue;
    }
    doubleNumbers.push(2* num);
}
console.log(
    doubleNumbers
)
/* Use a 'for-of' loop to iterate through the array ["chai","green tea","black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is grater than 10. Store the teas iterated over in an array named 'shortTeas'.*/

let teatype = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const tea of teatype) {
    if(tea.length>10){
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas)