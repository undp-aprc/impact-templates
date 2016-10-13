(function($) {
    $(document).ready(function() {
        var controller = new ScrollMagic.Controller();

        var menuBehaviour = new ScrollMagic.Scene({
            triggerElement: '#mainMenu',
            triggerHook: 0,
            loglevel: 0,
            offset: 1
        })
            .setPin('#mainMenu')
            .setClassToggle('#mainMenu','scrolled')
            .addTo(controller);


        var ribbonBehaviour = new ScrollMagic.Scene({
            triggerElement: '#mainMenu',
            triggerHook: 0,
            loglevel: 0,
            offset: 1
        })
            .setClassToggle('#subscriptionRibbon','scrolled')
            .addTo(controller);

        var scrollToTop = new ScrollMagic.Scene({
            triggerElement: '#mainMenu',
            triggerHook: 0,
            loglevel: 0,
            offset: 1
        })
            .setClassToggle('#goToTop','scrolled')
            .addTo(controller);

    });

    /* Functions using the appear jquery plugin */


}) (jQuery);

