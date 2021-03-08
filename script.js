var max = Math.floor(Math.random() * 26);
var min = Math.floor(Math.random() * -6);
var mod = 10;

var weather = 15;

if (weather > min && weather < mod) {
    document.getElementById("box").innerHTML = 'The weather is cold';
} else if  (weather > mod && weather < max) {
    document.getElementById("box").innerHTML = 'The weather is moderate';
} else {
    document.getElementById("box").innerHTML = 'The weather is unknown';
}