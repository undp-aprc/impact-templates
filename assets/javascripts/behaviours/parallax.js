function Parallax() {
    scrollPos = $(this).scrollTop();
    $('#hero-bg').css({
        'background-position' : '50% ' + (-scrollPos/8)+"px"
    });
    $('#header').css({
        'margin-top': (scrollPos/4)+"px",
        'opacity': 1-(scrollPos/250)
    });
}
$(document).ready(function(){
    $(window).scroll(function() {
        Parallax();
    });
});