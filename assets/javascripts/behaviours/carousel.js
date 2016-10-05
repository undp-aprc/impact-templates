(function($) {
    $(document).ready(function(e) {
        var Swiper = $('#storyList').swiper({
            centeredSlides: true,
            spaceBetween: 12,
            slidesPerView: 4,
            loop: true,
            nextButton: '.slide-button-next',
            prevButton: '.slide-button-prev',
            onInit: afterInit(),
            breakpoints: {
                960: {
                    slidesPerView: 2,
                    spaceBetween: 12
                }
            }
        });

        function afterInit() {
            carouselSpinner.stop();
        }

        var maxHeight = 0;

        $('.caption').each(function() {
            var me = $(this);
            var height = me.height();
            maxHeight = height > maxHeight ? height : maxHeight;
        });

        $('.caption').each(function() {
            $(this).height(maxHeight);
        });
    });
})(jQuery);