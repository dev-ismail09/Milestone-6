function greeting(person, name){
    // console.log(person);
    person(name);
}
// const name = 'Halim mama';
// const number = [45, 54, 78];
// const laptop = {price: 4500, brand: 'Lenovo'};

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

// greeting(laptop);
greeting(greetingHandler, 'Ismail Hosen');
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Salman vau');
greeting(greetNight, 'Sallu');



function submitHandler(){
    console.log('submit button clicket');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)
