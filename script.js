function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var max = Math.floor(Math.random() * 41);
var min = Math.floor(Math.random() * -41);

var weather = getRndInteger(min, max)

console.log(weather);


var coldMin = -5;
var coldMax = 10;
var moderateMin = 11;
var moderateMax = 31;
var hotMin = 32;

if (weather >= coldMin && weather <= coldMax) {
    document.getElementById("box").innerHTML = 'The weather is cold';
} else if (weather >= moderateMin && weather <= moderateMax) {
    document.getElementById("box").innerHTML = 'The weather is moderate';
} else if (weather >= hotMin ) {
    document.getElementById("box").innerHTML = 'The weather is hot';
} else {
    document.getElementById("box").innerHTML = 'The weather is unknown';
};


var array = [1, 7, -3, 9];
let largest = 0;


for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
document.getElementById("box2").innerHTML = largest;



let menuStatus = false;

document.getElementById("menu").style.marginLeft = "0px";

// we added that to hide the menu from the beginning

/* we create here a function that will check the menuStatus variable, when it is

false we will show the menu and we will change the value of the menuStatus to true

else we will hide the menu by adding marginLeft -300px and we will change the value to false

*/

function menuToggle() {

    if (menuStatus == false) {

        document.getElementById("menu").style.marginLeft = "300px";

        document.getElementById("menu").style.transition = "1s";

        menuStatus = true;

    } else {

        document.getElementById("menu").style.marginLeft = "0";

        menuStatus = false;

    }

}

// here we add an event to the (menu-btn) when we click the function will be called


document.getElementById("menu-btn").addEventListener("click", menuToggle);

//setTimeout(() => { alert("Hello world!") }, 1000);


