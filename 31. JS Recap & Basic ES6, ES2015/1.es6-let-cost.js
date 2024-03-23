// breakup with var
// no more use of var

// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 30;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + 'pokas pokas'
console.log(message);

const numbers = [12, 25, 54, 15];
// reassign is not allow
// numbers = [44, 56, 45, 87];
// but new value add korte parbo
numbers.push(123);
numbers[1] = 90; // replace
console.log(numbers);


const student = {
    name: 'Mofiz',
    address: 'Rajshahi'
}
// student = {name: 'Mofazzol} // cannot do this
student.name = 'Mofazzol';
