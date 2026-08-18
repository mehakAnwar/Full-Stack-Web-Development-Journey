// $("h1").css("color","red")                                     => MODIFYING CSS
// $("h1").addClass("margin-50")                                  => Adding CLASS
// $("h1").removeClass("margin-50")                               => REMOVING CLASS    
// $("button").text("Don't click me")                             => MANIPULATING TEXT
// $("button").html("<em>hey</em>");                              => MANIPULATING HTML
// consol.log($("img").attr("src"));                              => GETS VALUE/ATTRIBUTE
// $("a").attr("href","https://www.github.com/mehakAnwar")        => SETS VALUE/ATTRIBUTE


/* 
                  ----------------Adding event listeners ------------------


$("h1").click(function(){                                        
    $("h1").css("color","purple")
})

$("input").keypress(function(event){                           
    $("h1").text(event.key);
}); 

$("h1").on("mouseover",function(){
    $("h1").css("color","green");
}) */


/* $("h1").before("<button>before</button>");                     => Adding elements on the fly
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
 */


// $("button").remove();                                         => remove all the buttons on the fly

/* $("h1").click(function(){                                     => VISIBILITY HIDDEN
       $("h1").hide()}); */


/* $("h1").click(function(){                                     => REAPPEAR
    $("h1").show()}); */


/*
                  ----------------WEBSITE ANIMATIONS ------------------

$("button").on("click",function(){                                   
    $("h1").toggle();
});
$("button").on("click",function(){
    $("h1").fadeOut();
});
$("button").click(function(){                                    
    $("h1").fadeIn()
});
$("button").click(function(){                                    
    $("h1").fadeToggle()
}); 
$("button").on("click",function(){
    $("h1").slideUp();
});
$("button").on("click",function(){
    $("h1").slideDown();
});
$("button").on("click",function(){
    $("h1").slideToggle();
});      

$("button").on("click",function(){                            => TO ANIMATE COSTOM CSS
    $("h1").animate({opacity:0.5});                  //customize number values,no strings eg: changing color property
});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
*/
