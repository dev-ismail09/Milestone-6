// function declaration
// function add(first, second){
//     const total = first + second;
//     return total;
// }


const number = 56;
// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}



//function expression -> anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}


// function add(first, second){
//     const total = first + second;
//     return total;
// }

function add4(first, second){
    return first + second;
}

// add2 + add4 combo
const add5 = function(first, second){
    return first + second;
}

// arrow function
const add6 = (first, second) => first + second;

const result = add6(0, 2);
console.log(result);

// interview question: differences between function declaration, funtion expression and arrow function

const sum = (a, b) =>  a + b;

console.log(sum(100,2));