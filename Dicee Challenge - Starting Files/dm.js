/* --------------------------------DICE 1------------------------------------- */
var randomNumb1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumb1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
/* ----------------------------DICE 2----------------------------------------- */
var randomNumb2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumb2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 
/* ------------------------------winner ----------------------------*/
if (randomNumb1 > randomNumb2){
    document.querySelector("h1").innerHTML ="Player 1 win!";
 }else if (randomNumb2 > randomNumb1)
 {
     document.querySelector("h1").innerHTML = "Player 2 is the winner !";
 }else {
     document.querySelector("h1").innerHTML = "you are tied!";
 }

/*  Short code */
/* var randomNumb1 = document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ (Math.floor(Math.random() * 6) + 1) + ".png"); */

/* Player dice 2 */
/*var randomNumb2 = document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ (Math.floor(Math.random() * 6) + 1) + ".png"); */


