// 1. create object using object literals
const player = {}; // empty object
player.name = 'Small Nirob'; // properties
player.specialty = 'batsman'; // properties
player.bat = function(){ // method
    console.log('swing your bat');
}
// console.log(player);
// player.bat();


const student = {
    name: 'Isamil', 
    job: 'web design', 
    work: function(){
    console.log('make website')
    },
    salary: 20000

}

// 2. object constructor
const person = new Object(); // give {} , empty object
console.log(person); 

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name); // it's work like a chain তার উপরের object টা ধরে নেবে



// 4. class

class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(21);
console.log(person1);


// 5. function - not use so much , we using class or  object literals

function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32); 
console.log(tesla);
