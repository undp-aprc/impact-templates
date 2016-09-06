/* A small helper function to detect devices based on features (Modernizr) and screen size */
/* 1. A screen that is less than 768px and supports touch = mobile */
/* 2. A screen that is between 786px and 1024px and supports touch = tablet */
/* 3. A screen that is > 1024px is desktop (whether or not it supports touch) */
(function($) {
    $(document).ready(function() {
        var orientation = window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape';
        var pixelDensity = window.devicePixelRatio >= 2 ? 'retina' : 'no-retina';
        var touch = Modernizr.touchevents;
        var device;


        if (window.matchMedia("(max-width: 767px)").matches) {
            device = 'mobile';
        }

        if (window.matchMedia("(min-width: 768px) and (max-width: 1024px").matches) {
            device = 'tablet';
        }

        if (window.matchMedia("(min-width: 1025px)").matches) {
            device = 'large-screen-device';
        }

        device = device + ' ' + pixelDensity;

        $('html').addClass(device);
    });
})(jQuery);