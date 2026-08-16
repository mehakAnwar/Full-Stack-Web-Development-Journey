var randonNo1=Math.random();
randonNo1= Math.floor(randonNo1 *6)+1;
var randonNo2=Math.random();
randonNo2= Math.floor(randonNo2 *6)+1;

document.querySelector("img").setAttribute("src","images/dice"+randonNo1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randonNo2+".png");

if(randonNo1 === randonNo2){
    document.querySelector("h1").innerHTML="It's a Draw";
}else if(randonNo1 > randonNo2){
    document.querySelector("h1").innerHTML="Player 1 Won 🚩";
}else{
    document.querySelector("h1").innerHTML="Player 2 Won 🚩";
}
