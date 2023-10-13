// 1
// function add(first, second){
//     console.log(first, second);
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     // shortcut 
//     second = second || 0;
//     const total = first + second;
//     return total;
// }

// 2
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}

const result = add();
console.log(result);



function fullName(first, last = 'Hosen'){
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Ismail');
console.log(name);


function example(a = 0, b = 0){
   const totalResult = a + b;
   return totalResult;
}
const numberResult = example();
console.log(numberResult);

