const student = {
    name: 'Ismail Hosen',
    money: 6000,
    study: 'Mathematics',
    subjects: ['calculus', 'algebra', 'geometry' ],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam'; // সব সময় মনে রাখতে হবে return করলে কিন্তু store(const or let) করতে হবে না হোলে output দেখতে পাবো না 
    },
    improveExam: function(subject){
        this.exam(); // akta method er modde r akta method call korte pari
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining  = student.treatDay(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining);