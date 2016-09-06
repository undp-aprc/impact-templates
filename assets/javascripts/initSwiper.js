(function($) {
    $(window).on('load', function(e) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 16,
            speed: 1000
        });

        $(window).on('scroll', function(){
            if ($(".executeOnDisplay").is(':visible')){
                $(".executeOnDisplay").addClass("animated");
            }
        });
    });
})(jQuery);