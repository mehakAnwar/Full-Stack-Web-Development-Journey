var gamePattern = []
var userClickedPattern= []
var buttonColors = ["red","blue","green","yellow"];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);


    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
}

$(".btn").on("click", function() {

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    makeSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});
function makeSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    var activeButton= document.querySelector("."+currentColour);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        },100);
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
        }
    }else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        
        console.log("Wrong");
        makeSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern= [];
    started =false;
}