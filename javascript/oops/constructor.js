function Car(name,model){
    this.name  = name; 
    this.model = model;
}

let tatacar = new Car("Tata","Nexon");
console.log(tatacar);

/* How to use function inside a costructor */

function tea(type){
    this.type = type;
    this.describe = function(){
        return `this is my ${this.type}`
    }
}

let dhurandhartea = new tea("dhurandhar tea")
console.log(dhurandhartea.describe());

/* how to use prototype inside a  */
 function Animal(name){
    this.name = name;
 }

 Animal.prototype.sound = function sound(){
    return `${this.name} make a sound`
 }

 let dog = new Animal("dog")
 console.log(dog.sound());
/* How to through error when new is not used */

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let teas = new Drink("tea");
let baba = Drink("tea")