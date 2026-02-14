/* Inheritence in javascript  */
class Vehical{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    start(){//method 
        return `this ${this.model} start with button not keys`
    }
}

class car extends Vehical{
    drive (){
        return `${this.name} : This is an inheritance example`;
    }
}

let myCar = new car('Tata','Nexon');//object creation or instance creation 
console.log(myCar.start(),myCar.drive());

/* Encapsulation -i want to restrict dirct access of objects data*/

class BankAccount{
    #balance = 0; // # declaration make it private.

    deposit(amount){
        this.#balance +=amount;  
    }

    getbalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
console.log(account.getbalance())

/* Abstraction - Hides complex implementation details */

class Coffeemachine{

    start(){
        return 'start the coffee machine';
    }

    brewwcoffee(){
        return 'grind the coffee and pass water/milk in it';
    }

    pressstartbutton(){
        let msgone = this.start();
        let msgtwo = this.brewwcoffee();
        return`${msgone},${msgtwo}`;
    }
}

let coffeegrey = new Coffeemachine();
console.log(coffeegrey.pressstartbutton());

/* polymorspism -that can take multiple forms .in this example method name is same but returns completely different things.just like one name many forms.*/

class bird{
    fly(){
        return `bird's can fly`;
    }
}

class Penguin extends bird{
    fly(){
        return 'penguin cant fly';
    }
}

let crow = new bird();
let penguin = new Penguin();
console.log(crow.fly());
console.log(penguin.fly()); 

//static method -type of method that can only be called by class itself.so that no one can use it by creating a object.it can only be called by class directly//

class Calculator{
    static add(a,b){
        return a+b;
    }
}

let minicalc = new Calculator();
// console.log(minicalc.add(2,5));
console.log(Calculator.add(2,5));

//getters and setters -- special type of method to get and set constructor values getter value read karta hai aur access control ke liye use kiya jata hai. setter value update karta hai validation control ke liye use hota hai .

class Employee{
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this._salary = salary;
    }

    get salary(){
        return 'you are not allowed to see salary directly';
    }

    set salary(value){
        if(value<0){
            console.error("Inavalid Salary");
        }else{
            this._salary = value; 
        }
    }
}

let mohit = new Employee("Mohit",30404);
console.log(mohit.salary);
mohit.salary = 9000;