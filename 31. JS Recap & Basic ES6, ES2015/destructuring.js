const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    phone: '01881881367',
    price: 400
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

// make sure write same name
const {phone} = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: 'Almas', age: 56, profession: 'Student'};
console.log(age);
console.log(name);

const {address} = fish;
console.log(address);

// array destructuring
const [first, second, third] = [44, 99, 25, 55];
console.log(first, second, third);


const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Father', 'Son'];
}
const [bap , beta] = getNames();
console.log(beta, bap);