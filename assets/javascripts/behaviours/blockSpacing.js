(function($) {
    $(document).ready(function() {
         // Move content below page-banner elements that are positioned absolutely
        var pageBannerHeight = $('.page-banner').outerHeight();
        var menuBarHeight = $('#primaryMenu').outerHeight();
        var contentAdjustmentHeight = pageBannerHeight;

        $('.container.content').css('margin-top', contentAdjustmentHeight);
    });
}) (jQuery);