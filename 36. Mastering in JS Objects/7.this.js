// console.log(this); // global 

const ismailHosen = {
    name: 'Ismail Hosen',
    money: 6000,
    study: 'Mathematics',
    subjects: ['calculus', 'algebra', 'geometry' ],
    exam: function(){
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    examArraw: () =>{
        console.log(this);
    },
    examNested: () =>{
        const arrow = () =>{
            console.log(this);
        }
        arrow()
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

ismailHosen.exam();


const HemelAli = {
    name: 'Hemel',
    money: 8000
}

HemelAli.exam = ismailHosen.exam;
HemelAli.exam()

const output = ismailHosen.exam();
const output2 = ismailHosen.examArraw(); // 1 level up / window pabo
console.log(output);
console.log(output2);
ismailHosen.examNested(); // window pabo 