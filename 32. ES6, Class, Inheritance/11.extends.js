class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}


class Instructor extends TeamMember{
    // name;
    designation = 'Web Course Instructor'
    team = 'web team'
    // location;
    constructor(name, location){
        // this.name = name;
        // this.location = location;
        super(name, location);
    }
    
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module} `)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }

}


class Developer extends TeamMember{
    // name;
    designation = 'Web Course Instructor'
    team = 'web team'
    tech;
    // location;
    constructor(name, location, tech){
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.tech = tech;
    }
    
    developFeature(feature){
        console.log(`please develop the  ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version} `)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}


class JobPlacement extends TeamMember{
    // name;
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    tech;
    region;
    // location;
    constructor(name, location, tech, region){
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.tech = tech;
        this.region = region;
    }
    
    provideResume(feature){
        console.log(`please develop the  ${feature}`)
    }
    perpareStudent(version){
        console.log(`please release the version ${version} `)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}

const alia = new Developer('Alia', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('bipasha', 'kolkata', 'JS', 'India');
console.log(bipasha);
