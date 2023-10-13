
// ai part ta aktu besi advanced , tai most of the case a kisu libarary use korbo

// const first = { a: 2 };
// const second = { a: 2 };
// const third = second;
// if(third === second){
//     console.log('They are same');
// }
// else{
//     console.log('different');
// }


const first = { a: 2, b: 2, d:5 };
const second = { a: 2, c: 5, b: 2 }; // order bodlailei r true hobe na

// do not use this method to  compare object or array
// const firstString =  JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString == secondString){
//     console.log("Same");

// }
// else{
//     console.log('Not Same')
// }


function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return true;
        for(const key of firstKeys){
            // console.log(key);
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

