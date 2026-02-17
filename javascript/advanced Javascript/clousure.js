/* closure - special type of function which return function and keep retaining the memory of the function. */
function outer(){
    let counter = 8;
    return function (){
        counter++;
        return counter;
    }
}
let increment = outer();
console.log(increment()); 

