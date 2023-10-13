/*
8 ways to get Undefine
 1. variable that is not initialized will give undefined
 2. function with no return
 3. parameter that is not passed will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that doesn't exists on an object will give you undefined
 6. accessing array elements outside of the index range
 7. deleting an element inside an array
 8. set a value directly to undefined
*/

// 1 
let first;
console.log(first);

// 2
function second(a,b){
    const total = a + b;

}

const result = second();
console.log(result);


// 3
function third(a,b,c){
    const total = a + b + c;
    console.log(a,b,c);

}

third(2,5);


// 4

function noNegetive(a,b){
    if( a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegetive(2, -5);
console.log(total);

// 5
const fifth = {id:2, name: 'ponchom', age: 40};
console.log(fifth.age, fifth.salary);

// 6 & 7
const sixth = [4, 89, 14, 35, 78];
// you should not do it, Instead use splice
delete sixth[1]
console.log(sixth[1], sixth[200]);
console.log(sixth);

// 8 

const eighth = undefined;
const ninth = null;

const data = {results: [], update: null};

console.log(typeof undefined);
console.log(typeof null);