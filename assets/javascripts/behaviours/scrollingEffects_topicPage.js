(function($) {
    $(document).ready(function(){



        var controller = new ScrollMagic.Controller();

        /*var topicNav = new ScrollMagic.Scene({
            triggerElement: '#topicContent',
            triggerHook: 0,
            loglevel: 0,
            offset: getOffset()*-1,
            duration:1000
        })
            .setPin('#topicContent')
            .setClassToggle('#topicContent','scrolled')
            .addTo(controller);*/

        var slideScroll = new ScrollMagic.Scene({
            triggerElement: '#topicContent',
            triggerHook: 0,
            loglevel: 0,
            offset: 100
        })
            .setClassToggle('.swiper-wrapper','pinned')
            .addTo(controller);


    });

    function getOffset() {
        var mainMenuBarHeight = $('#mainMenuBar').height();
        return mainMenuBarHeight;
    }
})(jQuery);