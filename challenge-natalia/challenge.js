// create two arrays
let students = ['John', 'Jane', 'Michi', 'Patrick', 'Leyla'];
let mathGrades = [70, 85, 55, 63, 100];

var studentName = prompt('Type a name: John, Jane, Michi, Patrick or Leyla'); //mein input field

students.forEach( (student, index) => {
    if (studentName == students[index]) {
        document.getElementById('challenge').innerHTML = `${studentName} has reached ${mathGrades[index]} points in Math this season.`;
    };
})



