// array like object

function sum(a, b, c){
    // console.log(arguments);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments); cannot do this
const total = sum(45, 89, 12, 65, 20);
console.log(total);
console.log(sum.length); // function er koita perameter ase