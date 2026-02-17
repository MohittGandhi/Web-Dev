/* bind call and apply */
const person = {
    name: "Mohit",
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet();
/* const persongreet = person.greet
console.log(persongreet()); */

const anothergreet = person.greet.bind({
    name: "Rahul"
})
anothergreet();
