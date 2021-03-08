function averageGrade(points) {
    if (points <= 100 && points >= 90) {
        text = 'A';
    } else if (points < 90 && points >= 80) {
        text = 'B';
    } else if (points < 80 && points >= 70) {
        text = 'C';
    } else if (points < 70 && points >= 60) {
        text = 'D';
    } else if (points < 60) {
        text = 'F';
    } else {
        text = 'is undefined';
    }
    return text;
}

let array = [76, 85, 65, 93, 81];
for (let i = 0; i < array.length; i++) {
    var averageMartin = array[0];
    var averageThomas = array[1];
    var averageKlaus = array[2];
    var averageMaria = array[3];
    var averageDavid = array[4];
    var personNumber = array.length;
}

var Martin = averageGrade(averageMartin);
var Thomas = averageGrade(averageThomas);
var Klaus = averageGrade(averageKlaus);
var Maria = averageGrade(averageMaria);
var David = averageGrade(averageDavid);

var classA = (averageMartin + averageThomas + averageKlaus + averageMaria + averageDavid) / personNumber;
var classResult = averageGrade(classA);

document.getElementById("box").innerHTML = 'Martin`s average is ' + Martin + '<br>Thomas`s average is ' + Thomas + '<br>Klaus`s average is ' + Klaus + '<br>Maria`s average is ' + Maria + '<br>David`s average is ' + David;

document.getElementById("box2").innerHTML = 'Class average is ' + classResult;



//fizzbuzz solution
for (i = 1; i < 21; i++) {
    var FizzBuzz = "";

    var division3 = i / 3;
    var division5 = i / 5;
    
    if ( Number.isInteger(division3) && Number.isInteger(division5) ) {
        FizzBuzz += "FizzBuzz<br>";
    } else if ( Number.isInteger(division3) ) {
        FizzBuzz += "Fizz<br>";
    } else if ( Number.isInteger(division5) && Number.isInteger(division5) ) {
        FizzBuzz += "Buzz<br>";
    } else {
        FizzBuzz += i + "<br>";
    }
    document.getElementById("box3").innerHTML += FizzBuzz;
}

//first solution with stars
let stars = ['*', '**', '***', '****', '*****'];

stars.forEach(function (value) {
    document.getElementById("box4").innerHTML += value + '<br>';
});


//second solution with stars
for (let star = '*'; star != '******'; star += '*') {

    document.getElementById("box5").innerHTML += star + '<br>';

}

