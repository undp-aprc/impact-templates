(function($) {
    $(document).ready(function() {
        var controller = new ScrollMagic.Controller();

        var menuBehaviour = new ScrollMagic.Scene({
            triggerElement: '#primaryMenu',
            triggerHook: 0,
            loglevel: 0,
            offset: 1
        })
            .setPin('#primaryMenu')
            .setClassToggle('#primaryMenu','inactive')
            .addTo(controller);
    });

    /* Functions using the appear jquery plugin */


}) (jQuery);

