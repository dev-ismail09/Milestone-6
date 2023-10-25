// 1. var let const 
// break up with var

const numbers = [11, 56, 54, 124, 98];
let salary = 456;
salary = 500;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string

const elementHTML = `
<div>
   <h3> Name: </h3>
   <p> Address: </p>
   <p> Salary: ${calculateSalary(10000, 0, 0)}</p>
   <p> Others: ${numbers[2]}</p>
`

// 4. Arrow Function
const doubleIt = x => x * 2;

const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread(...)
const ages = [11, 13, 15, 14, 16];
const newAges = [...ages, 22, 24, 21];
// console.log(newAges)

// destructuring
const {x, name, ...c} = {x: 45, y: 12, name: 'Sakib Al Hasan', Salary: 450000};
const [first, second, ...r] = [ 12, 45, 21, 65, 98];
console.log(first, second, r, c);
