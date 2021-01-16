'use strict';

alert("Hello Dear client")

var userName = prompt("let's know what is your name, please?");

function printName(userName) {

    alert("Hello " + userName);
}

printName(userName);

alert('welcome to my quiz :)');

var favPlane = prompt("Guess what is my favorite type of fighter planes?");
var counter = 0;
// console.log(favPlane.toLowerCase() === ('mig-29' || 'mig '))

if (favPlane.toLowerCase() === 'mig29' || favPlane.toLowerCase() === 'mig') {

    alert('you are right, I still like its high aerodynamic specifications:)');
    // console.log(favPlane.toLowerCase());

    counter++;

} else {

    alert('unfortunatlly, you did not guess :(');
};



var feeling = prompt('do you think that I am afraid of flying ?(yes/ No)');
if (feeling.toLowerCase() === 'yse') {

    alert(' No , I like it:)');
    console.log(feeling);

    counter++;

} else {
    alert('Great!');
}



var gravity = prompt('Do you think that i like the feeling of lacking gravity in Rollercoaster? ');

if (gravity.toLowerCase() === 'yes') {
    alert(' yes, Great! :)');
    console.log(gravity);

    counter++;
} else {
    alert('No , I like it!');
}


var flyPeriod = prompt("Guess How long could you fly with Mig-29 by paying 15000$ ? ");

if (flyPeriod === '1 hour') {
    alert(' yes, Great! :)');
    console.log(flyPeriod);

    counter++;
    break ;
} else {
    alert('No ');


}

var BA = prompt('Do you think that i studied Aeronautics? ') ;

if(BA.toLowerCase()==='yes'){ 
    alert(' yes, Great! :)');
    console.log(BA);

    counter++ ;
    break;
}else {
    alert('No');
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
        counter++;
        break;
    } else {
        alert('it is lower than mine');
    }

}


//7th question

var lunchArray = ['Okra', 'Fettuccine Alfredo', 'Stake', 'Pizza', 'Stuffed grape leaves'];


var numOfTrying = 0;
var check = false;
do {
    var Q7 = prompt('what kind of food that I prefer at lunch ?');
    for (var i = 0; i < lunchArray; i++){

    numOfTrying++;
    counter++;

    break;}

    if (check !== false){
        alert ("yes.Great ");
        console.log(lunchArray[i]);
    }else {
        
        alert('even it is not in my list i think i like it');
     }

} while (numOfTrying < 6 && check !== false)




alert("Good Job!... You got " + counter + " lunchArray")
// console.log("Your final score is " + userScore");
alert("Thank you for your time " + userName + ".");
// console.log("Thank you for your time " + userName + ".");
