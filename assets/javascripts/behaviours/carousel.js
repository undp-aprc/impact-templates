(function($) {
    $(document).ready(function(e) {
        $('#storyList').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow:3,
            arrows: true,
            prevArrow:"<a class='slick-button slick-button-prev' href='#'><span class='fa fa-chevron-circle-left'></span></a>",
            nextArrow:"<a class='slick-button slick-button-next' href='#'><span class='fa fa-chevron-circle-right'></span></a>",
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
            ]
        })
    });
})(jQuery);