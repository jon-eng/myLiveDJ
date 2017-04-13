$(function(){
  console.log("app loaded")
    $(window).scroll(function() {              
      // $('.soundcloud').toggle($(document).scrollTop() > 100);
      $(document).scrollTop() > 100 ? $('.soundcloud:hidden').fadeIn() : $('.soundcloud:visible').fadeOut();
    });

    var bg_video =  iframe.getElementById('bg-video'); 
    bg_video.mute();
    console.log(bg_video)

});