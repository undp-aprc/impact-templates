(function($) {
    $(document).ready(function() {
        $('.flip-container').bind('touchstart', function(e) {
            e.preventDefault();
            var active, me = $(this);
            if (me.hasClass('active')) active = true;

            $('.flip-container').each(function(obj) {
                $(this).removeClass('active');
            });
            if (!active) $(this).addClass('active');
        })

    });
})(jQuery);