'use strict';

alert("Hello Dear client")

var userName = prompt("let's know what is your name, please?");

function printName(userName) {

    alert("Hello " + userName);
}

printName(userName);

alert('welcome to my quiz :)');

// var favPlane = prompt("Guess what is my favorite type of fighter planes?");

// console.log(favPlane.toLowerCase());
// console.log(favPlane.toUpperCase());
// console.log(favPlane.toLowerCase() === ('mig-29' || 'mig '))

// if (favPlane.toLowerCase() === 'mig29' || favPlane.toLowerCase() === 'mig') {

//     alert('you are right, I still like its high aerodynamic specifications:)');

// } else {

//     alert('unfortunatlly, you did not guess :(');
// };

// var feeling= confirm('do you think that I am afraid of flying ?(yes/ No)');

// var feeling= ('do you think that I am afraid of flying ?(yes/ No)');
// console.log(feeling);
// if(feeling.toLowerCase()==='yse'){ 
//     alert(' yes, Great! :)');
// } else {
//     alert('No , I like it!');
// }


// var gravity = prompt('Do you think that i like the feeling of lacking gravity in Rollercoaster? ') ;

//     console.log(gravity);
// if(gravity.toLowerCase()==='yse'){ 
//     alert(' yes, Great! :)');
// } else {
//     alert('No , I like it!');
// }



// // var flyPeriod = prompt("Guess How long could you fly with Mig-29 by paying 15000$ ? ");










// // sixth question

// var num= 7;
// var i=0; 
//  while(i<4 && num !== "7" ){

//      num= prompt ("Guess my favorite number from 1 to 20? (you have 4 opportunities to guess)");
//      i++;

//     if (num >7){
//         alert('it is higher than mine');
//     }else {
//         alert ('it is lower than mine');
//     } 

// }



//7th question


// var numOfTrying = 0;
// // var lunchArray= ['Okra' , 'Fettuccine Alfredo', 'Stake' , 'Pizza' , 'Stuffed grape leaves'];

// var Q7 = prompt('what kind of food that I prefer at lunch ?');

// while (numOfTrying < 6 && Q7.toLowerCase() !== 'okra' || Q7.toLowerCase() !== 'fettuccine alfredo' || Q7.toLowerCase() !== 'stake') {

//     prompt('what kind of food that I prefer at lunch ?');
//     i++;
// }


// // console.log ([lunchArray]);

// for (var j=0 ; j<lunchArray.length ; j++){

//     alert (lunchArray[j]);
// }

var numOfTrying = 0;
var check = false ;
do  {
    var Q7 = prompt('what kind of food that I prefer at lunch ?');
    for(var i =0 ; check )

    numOfTrying++ ;

}while ( numOfTrying < 6 && check!==false)
