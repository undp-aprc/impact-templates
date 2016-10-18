(function($) {
    $(document).ready(function() {
        $('#menuToggle').on('touchstart click', function(e) {
            $('#mainMenuBar').toggleClass('active');
            $('#menuToggle').toggleClass('active');
            $('#menuPanel').toggleClass('active');
            return false;
        });
        $('.main-menu-bar li').on('touchstart click', function(e) {
            $('#mainMenuBar').removeClass('active');
            $('#menuToggle').removeClass('active');
            //$('#menuPanel').removeClass('active');
            return false;
        })
    });
})(jQuery);