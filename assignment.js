var n=Math.random();
n=Math.floor(6*n)+1;

var m=Math.random();
m=Math.floor(6*m)+1;

if(n==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}else if(n==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}else if(n==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}else if(n==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}else if(n==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

//or can perform same task using string concatination as follows
var randomImgSource="./images/dice" + m + ".png";
document.querySelector(".img2").setAttribute("src",randomImgSource);


if(n>m){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}else if(m>n){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}else{
   document.querySelector("h1").innerHTML="Draw";
}