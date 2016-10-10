(function($) {
    $(document).ready(function(){
        var controller = new ScrollMagic.Controller();

        var menuBehaviour = new ScrollMagic.Scene({
            triggerElement: '#topicContent',
            triggerHook: 0,
            loglevel: 0,
            offset: 0
        })

            .addTo(controller);
    });
})(jQuery);