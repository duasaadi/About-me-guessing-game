'use strict';

alert("Hello Dear client")
// console.log(Hello Dear client);


var userName = prompt("Let's know what is your name, please?");
var counter = 0;

function printName(userName) {

    alert("Hello " + userName);
    // console.log("Hello " + userName);
}

printName(userName);

alert('welcome to my quiz :)');
// console.log('welcome to my quiz :)');

var favPlane = prompt("Guess what is my favorite type of fighter planes?");
<<<<<<< HEAD
var counter = 0;
=======

// console.log(favPlane.toLowerCase());
// console.log(favPlane.toUpperCase());
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
// console.log(favPlane.toLowerCase() === ('mig-29' || 'mig '))

if (favPlane.toLowerCase() === 'mig29' || favPlane.toLowerCase() === 'mig') {

    alert('you are right, I still like its high aerodynamic specifications:)');
<<<<<<< HEAD
    // console.log(favPlane.toLowerCase());

=======
    // console.log('you are right, I still like its high aerodynamic specifications:));
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
    counter++;

} else {

    alert('unfortunatlly, you did not guess :(');
    // console.log('you are right, I still like its high aerodynamic specifications:));
};



var feeling = prompt('do you think that I am afraid of flying ?(yes/ No)');
<<<<<<< HEAD
if (feeling.toLowerCase() === 'yse') {

    alert(' No , I like it:)');
    console.log(feeling);

=======
console.log(feeling);
if (feeling.toLowerCase() === 'yes') {

    alert(' No, I like it :)');
    // console.log(' No, I like it :)');
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
    counter++;

} else {
    alert('Great!');
<<<<<<< HEAD
=======
    // console.log(' No, I like it :)');
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
}



var gravity = prompt('Do you think that i like the feeling of lacking gravity in Rollercoaster? ');

<<<<<<< HEAD
if (gravity.toLowerCase() === 'yes') {
    alert(' yes, Great! :)');
    console.log(gravity);

=======
console.log(gravity);
if (gravity.toLowerCase() === 'yes') {
    alert(' yes, Great! :)');
    // console.log(' yes, Great! :)');
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
    counter++;
} else {
    alert('No , I like it!');
    // console.log('No , I like it!');
}


var flyPeriod = prompt("Guess How long could you fly with Mig-29 by paying 15000$ ? ");

if (flyPeriod === '1 hour') {
    alert(' yes, Great! :)');
<<<<<<< HEAD
    console.log(flyPeriod);

=======
    // console.log(' yes, Great! :)');
>>>>>>> 3617c95ea3b1067fae24d35d84fddd84d23800e0
    counter++;
    break ;
} else {
    alert('No ');
    // console.log('No');


}


var BA = prompt('Do you think that i studied Aeronautics? ');

console.log(BA);
if (BA.toLowerCase() === 'yes') {
    alert(' Yes, great! :)');
    // console.log('Yes, great!');
    counter++;
} else {
    alert('No');
    // console.log('No');
}


// // sixth question

var num = 7;
var i = 0;
while (i < 4 && num !== "7") {

    num = prompt("Guess what is my favorite number from 1 to 20? (you have 4 opportunities to guess)");
    i++;

    if (num > 7) {
        alert('it is higher than mine');
        console.log(num);
    } else if (num = 7) {
        alert('it is true');
        // console.log('it is true');
        counter++;
        break;
    } else {
        alert('it is lower than mine');
        // console.log('it is lower than mine');
    }

}


//7th question

var lunchArray = ['Okra', 'Fettuccine Alfredo', 'Stake', 'Pizza', 'Stuffed grape leaves'];


var numOfTrying = 0;
var check = false;
do {
    var Q7 = prompt('what kind of food that I prefer at lunch ?  ');
    for (var i = 0; i < lunchArray; i++) {

        numOfTrying++;
        alert("Even if it's not my favourite meal, but I think I like it");
        counter++;
        break;
    }

    if (check != false) {
        alert("No you are wrong.");
        // console.log('Yes great.');

    } else {
        // console.log('Even if it's not my favourite meal, but I think I like it');
    }
}

while (numOfTrying < 6 && check !== false)
alert ("You got " + counter + " out of 7!")
// console.log('You got " + counter + " out of 7!');

alert("The correct answers are " + lunchArray + "!");
