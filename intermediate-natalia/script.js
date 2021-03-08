console.log('test');

// Intermediate - Exercise 1 | Compare two numbers
// Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

var studentOne = 'Martin';
var studentTwo = 'Thomas';
var studentThree = 'Klaus';
var studentFour = 'Maria';
var studentFive = 'David';

var studentGradeOne = 76;
var studentGradeTwo = 85;
var studentGradeThree = 65;
var studentGradeFour = 93;
var studentGradeFive = 81;

        // Based on their points, output the grade, according to the following table: < 60 F; < 70 D; < 80 C; < 90 B; < 100 A;

let arrayStudents = [studentOne, studentTwo, studentThree, studentFour, studentFive];

let arrayGrades = [studentGradeOne, studentGradeTwo, studentGradeThree, studentGradeFour, studentGradeFive];

arrayStudents.forEach( (student, index) => {
    const grade = arrayGrades[index]; // If you have two separate arrays, you need to access the [index] property of the other array in each iteration:
    document.getElementById("intermediateOne").innerHTML += `${student} = ${grade} `;
    if (grade < 60) {
        document.getElementById("intermediateOne").innerHTML += `F <br>`;
    } else if (grade < 70) {
        document.getElementById("intermediateOne").innerHTML += `D <br>`;
    } else if (grade < 80) {
        document.getElementById("intermediateOne").innerHTML += `C <br>`;
    } else if (grade < 90) {
        document.getElementById("intermediateOne").innerHTML += `B <br>`;
    } else {
        document.getElementById("intermediateOne").innerHTML += `A <br>`;
    }
});

