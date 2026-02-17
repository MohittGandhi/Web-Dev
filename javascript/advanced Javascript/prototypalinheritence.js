/* prototype based inheritence example*/

function Person(name){
    this.name = name;
}

Person.prototype.speak = function(){
    return console.log(`Hello my name is ${this.name}`)
}

let mohit = new Person("Mohit");
mohit.speak()