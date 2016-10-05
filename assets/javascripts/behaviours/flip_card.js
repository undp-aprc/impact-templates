(function($) {
    $(document).ready(function() {
        $('.flip-container').bind('touchstart', function(e) {
            e.stopPropagation();
            $(this).toggleClass('active');
        });

    });
})(jQuery);