let students = ['Isa', 'Jane', 'Anna'];
let mathGrades = [70, 85, 33];

var typedName = prompt("type your name");

function searchName(typedName) {
    var index = students.indexOf(typedName);
    if (index > 0) {
        return index;
    } else {
        typedName = 'undefined';
    }
}

var first = searchName(typedName); //2

function searchGrade(first) {
    var value = mathGrades[first];
    return value;
}

var second = searchGrade(first); //grade


if (typeof first !== 'undefined') {
    document.getElementById("box").innerHTML = typedName + " has reached " + second + " points in Math this season";
} else {
    document.getElementById("box").innerHTML = 'This person is not in db';
}