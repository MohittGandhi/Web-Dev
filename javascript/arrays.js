// q1
let teaflavors = ["green tea", "black tea", "oolang tea"];

const firstTea = teaflavors[0];

//q2
let cities = ["london", "tokoyo", "Paris", "New york"];

const favoriteCity = cities[2];

//q3
let teatypes = ["herbal tea", "white tea", "masala chai"];
teatypes[1] = "jasmine tea";
console.log(teatypes);

//q4
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

//q5

let teaorders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaorders.pop();
console.log(teaorders);
console.log(lastOrder);

//q6

let popularteas = ["green tea", "oolang tea", "chai"];

let softcopyteas = popularteas;

let europienCities = ["Paris", "Rome "];
let asiancities = ["tokyo", "bangkok"];

// worldcities = europienCities + asiancities;
worldcities = europienCities.concat(asiancities);
console.log(worldcities);

//q10
citybucketlist = ["kyoto", "london", "Cape town", "Vancouver"];
islondoninlist = citybucketlist.includes("london");
console.log(islondoninlist);
// for(items in citybucketlist){
//     if ("london" == citybucketlist[items]) {
//         console.log("yes");
//         break;
//     } else {
//       console.log("No");
//     }
// }

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));