
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var imageSource1 = "images/dice"+randomNumber1+".png"; // images/dice3.png

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var imageSource2 = "images/dice"+randomNumber2+".png"; // images/dice3.png

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


// which player wins
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins🐵 ";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins🐵 ";
}
else
{
   document.querySelector("h1").innerHTML = "DRAW 😂 ";
}
