// primitive a num1 er man change hoi nai

// primitive types are pass by value

let num1 = 50;
let num2 = 7;
function multiply(a, b){
  const result = a * b;
  return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);


// non-primitive seita change hobe

// object and array are pass by reference

let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'Anika'};

function makeMovie(couple1, couple2){
    couple1.name = "Ononto";
    couple2.partner = "Mim";
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);