
let random1=Math.ceil(1+(Math.random()*5));
let randomdice1="dice"+random1+".png";
let img1loc="images/"+randomdice1;

document.getElementsByClassName("image")[0].setAttribute("src",img1loc);

let random2=Math.ceil(1+(Math.random()*5));
let randomdice2="dice"+random2+".png";
let img2loc="images/"+randomdice2;

document.getElementsByClassName("image")[1].setAttribute("src",img2loc);

if(random1>random2){
    document.getElementsByTagName("h1")[0].innerHTML="🚩 Play 1 Wins!";
}
else if(random1==random2){
    document.getElementsByTagName("h1")[0].innerHTML="📍Draw!";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="🚩 Play 2 Wins!";
}