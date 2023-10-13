const student = {
    name: 'Ismail Hosen',
    age:  19,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject]; // right
// const marks2 = student.marks.subject;// wrong 
console.log(marks);
console.log(math);
console.log(chemistry);
console.log(subject);
console.log(subjectMarks);