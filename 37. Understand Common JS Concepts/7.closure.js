function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();// প্রতিজন তার নিজের হিসাব রাখবে

const watch2 = stopWatch();

const watch3 = stopWatch();

console.log(watch1()); 
console.log(watch1());
console.log(watch1());
console.log(watch2());
console.log(watch2());
console.log(watch1());
console.log(watch3());
console.log(watch3());