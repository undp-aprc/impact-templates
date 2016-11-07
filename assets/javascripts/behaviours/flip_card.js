(function($) {
    $(document).ready(function() {
        $('.flip-container').bind('touchstart click', function(e) {
            e.preventDefault();
            if (e.type === 'touchstart') {
                $(this).unbind('click');
            }
            var target = $(e.target);
            if (target.hasClass('btn')) {
                window.open(target.attr('href'));
            }
            var active, me = $(this);
            if (me.hasClass('active')) active = true;
            if (!active) {
                $('.flip-container').siblings().removeClass('active');
                me.addClass('active');
            } else {
                me.removeClass('active');
            }

        })

    });
})(jQuery);