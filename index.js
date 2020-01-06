
// for the left side dice images
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomImageSource);



// for the right side dice images

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Match Draw!";
}
