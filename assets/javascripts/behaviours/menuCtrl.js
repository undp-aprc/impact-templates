(function($) {
    $(document).ready(function() {
        $('#menuToggle').on('touchstart', function(e) {
            $(this).parent('.main-menu').toggleClass('active');
        });
        $('.main-menu li').on('touchstart', function(e) {
            $(this).parents('.main-menu').removeClass('active');
        })
    });
})(jQuery);