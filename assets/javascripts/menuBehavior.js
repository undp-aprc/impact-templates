/**
 * Created by webdev on 14/07/2016.
 */

(function($) {
    $(document).ready(function() {

        // Toggle the right-hand drawer menu on and off
        $('#menuToggleButton').on('click', function(e) {
            $('body').toggleClass('menu-active');
            $('#menuToggleButton').toggleClass('fa-bars');
            $('#menuToggleButton').toggleClass('fa-close');
        });


        // init controller
        var controller = new ScrollMagic.Controller();

        // Fade menu bar from starting color to final
        var tween = new TimelineMax ()
            .add([
                TweenMax.to("#topNavBar .menu-bar", 1, {backgroundColor:'#000', ease: Linear.easeOut}),
            ]);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "body", triggerHook: 0, duration: 0, offset: 64})
            .setClassToggle('#topNavBar','active')
            .addTo(controller);

        /*var scene = new ScrollMagic.Scene({triggerElement: "h1", triggerHook: 0, duration: 0, offset: (-1 * emToPx(4))})
            .setPin('h1')
            .addTo(controller);*/

        /*var scene = new ScrollMagic.Scene({triggerElement: "h2", triggerHook: 0, duration: 0, offset: -156})
            .setPin('h2')
            .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: "#pageBanner", triggerHook: 0, duration: 0, offset: 0})
            .setTween(tween)
            .addTo(controller);*/


// create a scene

        function emToPx(emVal) {
            var fontSize = parseInt($('html').css('font-size'));
            var pixelHeight = emVal * fontSize;
            return pixelHeight;
        }

    });
})(jQuery);

