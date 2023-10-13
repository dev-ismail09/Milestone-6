// syntactic sugar - class
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module} `)
    }
}

const aamir = new Instructor('aamir', 'Mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);