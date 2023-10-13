const ismailHosen = {
    name: 'Ismail Hosen',
    money: 6000,
    study: 'Mathematics',
    subjects: ['calculus', 'algebra', 'geometry' ],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam(); 
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const HemelAli = {
    name: 'Hemel',
    money: 8000
}
// call
const result = ismailHosen.exam.call(HemelAli);
const result2 = ismailHosen.treatDay.call(HemelAli, 400, 40);
console.log(result);
console.log(result2);
// apply
const output = ismailHosen.treatDay.apply(HemelAli, [1000, 100]);
console.log(output);

// bind - create new function
const output2 = ismailHosen.treatDay.bind(HemelAli);
const remaining =  output2(1000, 100);
console.log(remaining)