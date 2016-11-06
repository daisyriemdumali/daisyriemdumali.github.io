$(window).scroll(function() {
   if( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 100) ) {
        $(".fb-messenger").css("display", "none");
   }
   else {
        $(".fb-messenger").css("display", "block");
   }
});