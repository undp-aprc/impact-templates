(function($) {
    $(document).ready(function(){
        var menuHeight = $('#mainMenu').height();
        console.log('MenuHeight: ',menuHeight);
        var controller = new ScrollMagic.Controller();

        /*var menuBehaviour = new ScrollMagic.Scene({
            triggerElement: '#topicNavigation',
            offset: (menuHeight * -1) +1,
            triggerHook: 0,
            loglevel: 0,
        })
            .setPin('#topicNavigation')
            .addTo(controller);*/

       var menuBehaviour = new ScrollMagic.Scene({
            triggerElement: '#topicHeader',
            offset: (menuHeight * -1) +1,
            triggerHook: 0,
            loglevel: 0,
        })
            .setPin('#topicHeader')
            .setClassToggle('#topicHeader','scrolled')
            .addTo(controller);

    });
})(jQuery);