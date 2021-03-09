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

        // Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).
sum = 0;
classAverage = 0;
arrayGrades.forEach( (gradeNew) => {
    sum = sum + gradeNew;
    classAverage = sum/arrayGrades.length;
}); document.getElementById("intermediateOne").innerHTML += `The average of the class is: ${classAverage}  <br>`;




// Exercise 2 | FizzBuzz -- Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function range(start, count) {
    return Array.apply(0, Array(count))
      .map((element, index) => index + start);
}

let numArray = range(1,100);
console.log(numArray);

div3 = 0;
div5 = 0;
var newArray = new Array;

numArray.forEach( (num) => {
    let div3 = num / 3; // 1/3
    let div3Remainder = num % 3;
    let div5 = num / 5;
    let div5Remainder = num % 5;
    if (num % 3 == 0) {
        document.getElementById("intermediateTwo").innerHTML += `Buzz <br>`;
    } else if (num % 5 == 0) {
        document.getElementById("intermediateTwo").innerHTML += `Fizz <br>`;
    } else if (num % 3 == 0 && num % 5 == 0) {
        document.getElementById("intermediateTwo").innerHTML += `FizzBuzz <br>`;
    } else {
        document.getElementById("intermediateTwo").innerHTML += `${num} <br>`;
    };
});



// Exercise 3 -- try to recreate this form using a loop :
// *
// **
// ***
// ****
// *****

var star = '';

for (let count = 0; count < 5; count++) {
    star += '*';
    document.getElementById("intermediateThree").innerHTML += `${star} <br>`;
}
