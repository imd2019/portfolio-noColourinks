$(document).ready(function(){
  
$(".navBurger").click(function(){
       if($("body").hasClass("NavClosed")) {
        $("body").removeClass("NavClosed");
        $("body").addClass("NavOpen");
       } else if($("body").hasClass("NavOpen")) {
        $("body").removeClass("NavOpen");
        $("body").addClass("NavClosed");
       }
});

$("body").mousemove(function(e){
    $('.mouseRocket').css({'top': e.clientY - 50 , 'left': e.clientX - 25 });
    if($("body").hasClass("NavOpen") && e.clientX < 140) {

       // $('.mouseRocket').css({'background-image': 'url(/img/MouseUfoBlack.svg)' });
    } else {
        $('.mouseRocket').css({'background-image': 'url(/img/MouseUfoWhite.svg)' });
    }
  });

});