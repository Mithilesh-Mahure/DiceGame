
var randomNum1=(Math.floor(Math.random()*6)) + 1;
var randomDiceimg="dice"+randomNum1+".png";
var randomDicesrc="images/"+randomDiceimg
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDicesrc);


var randomNum2=(Math.floor(Math.random()*6)) + 1;
var randomDiceimg2="dice"+randomNum2+".png";
var randomDicesrc2="images/"+randomDiceimg2
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDicesrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player1 wins!"
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Its A draw!"
}