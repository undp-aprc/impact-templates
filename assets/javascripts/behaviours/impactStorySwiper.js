var impactStories = new Swiper('.swiper-container.impact-stories', {
    centeredSlides: true,
    spaceBetween:10,
    slidesPerView: 4,
    loop: true,
    slideToClickedSlide: true,
    nextButton: '.button-next',
    prevButton: '.button-prev',
    breakpoints: {
          640: {
              slidesPerView: 1
          }
    },
    onInit: function(e) {
        $('.sdg-tiles li').remove(); // Remove existing items from .sdg-tiles
        var realIndex = e.slides.eq(e.activeIndex).attr('data-swiper-slide-index');
        var story = ImpactStories[realIndex];

        sdgs = story.sdgs;

        for (var i = 0; i < sdgs.length; i++) {
            var tileId = stringify(sdgs[i]);
            $('.sdg-tiles').append('<li><img src="/assets/images/sdgs/sdg-'+tileId+'.png" /></li>');
        }

        $('#dynamicContentContainer').find('.title').html(story.title);
        $('#dynamicContentContainer').find('.main-text').html(story.text);
        $('#dynamicContentContainer').find('.learn-more a').attr('href', story.url);
    }
});

impactStories.on('slideChangeEnd', function(e) {
    $('.sdg-tiles li').remove(); // Remove existing items from .sdg-tiles
    var realIndex = e.slides.eq(e.activeIndex).attr('data-swiper-slide-index');
    var story = ImpactStories[realIndex];
    $('#dynamicContentContainer').find('.title').html(story.title);
    $('#dynamicContentContainer').find('.main-text').html(story.text);
    $('#dynamicContentContainer').find('.learn-more a').attr('href', story.url);

    sdgs = story.sdgs;

    for (var i = 0; i < sdgs.length; i++) {
        var tileId = stringify(sdgs[i]);
        $('.sdg-tiles').append('<li><img src="/assets/images/sdgs/sdg-'+tileId+'.png" /></li>');
    }
});

function stringify(int) {
    if (int < 10) {
        return String('0'+int);
    }
    return String(int);
}

$('.topic-navigation a').on('click', function(e) {
    var me = $(this);
    var index = me.data('index');
    swiper.slideTo(index);

    $(this).parents('ul').children('li').each(function() {
        $(this).removeClass('active');
    });

    $(this).parent('li').addClass('active');

});



