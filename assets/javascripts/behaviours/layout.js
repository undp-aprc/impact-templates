/* Dynamic page layout for elements that have dimensions need to be calculated */

(function($) {
    $(document).ready(function() {
        calcDims();
        $(window).on('resize', function(e) {
            calcDims();
        })
    });

    function calcDims() {
        var heroHeight = $('.hero').height();
        var menuBarHeight = $('#mainMenuBar').height();
        $('.page-header.flex-wrapper').height(heroHeight - menuBarHeight); // Set the flexbox wrapper the same height as the hero bg less the height of the menubar.
    }
})(jQuery);