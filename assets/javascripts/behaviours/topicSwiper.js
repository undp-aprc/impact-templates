var swiper = new Swiper('.swiper-container-main', {
    parallax: true,
    speed: 600,
    hashnav: true,
    threshold: 100,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});

var content = {
    'themes': [
        {
            'title': 'Food and Nutritional Security',
            'subtopics': [
                {
                    'title': "Strategies for increasing food production and provisioning",
                    'stories': {
                        'sudan': {
                            'title': "Enhancing traditional women's gardens to improve food security in Sudan",
                            'mainText': "In Sudan, two main types of approaches were developed across the four target states. In the River Nile State, targeted households received technical input and support to improve their individual home gardens. In North Kordofan and Gedarif, where water access is a cause for concern, the focus was on providing water access to collective land for vegetable cultivation. These collective plots, traditionally referred to as Jubraka, which means home garden, are managed by groups typically made up of ten to twelve women, and one man. The Jubraka have greatly contributed to diversifying food crops, particularly in the dry season. In addition, women received technical assistance to increase goat milk production, plant trees on the edge of cultivated land, and grow seedlings for different crops.",
                            'highlightText': "The Jubraka or ‘home garden’, have greatly contributed to diversifying food crops, particularly in the dry season."
                        },
                        'cabo-verde': {
                            'title': "A story about something in Cabo Verde",
                            'mainText': "This is a story about something in Cabo Verde. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            'highlightText': "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
                        },
                        'haiti': {
                            'title': "A story about something in Haiti",
                            'mainText': "This is a story about something in Haiti. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            'highlightText': "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
                        },
                    },
                }]
        },
        {
            'title': 'Water and access to water',
            'subtopics': [
                {
                    'title': "the first subtopic about water stuff",
                    'stories': {
                        'cambodia': {
                            'title': "Something about something in Cambodia",
                            'mainText': "Some text about stuff in Cambodia. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            'hightlightText': "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
                        },
                        'niger': {
                            'title': "This is a cool story about Niger",
                            'mainText': "Something about Niger. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            'highlightText': "Quisque velit nisi, pretium ut lacinia in, elementum id enim."
                        }
                    }
                }
            ]
        }
    ]
};

(function($) {
    $(document).ready(function() {
        var initData = $('.examples-box').data();
        var initStory = content.themes[initData.inittheme].subtopics[initData.initsubtopic].stories[initData.initcountry];
        var initItem = $('.examples-box').find('.item-wrapper').first();
        initItem.addClass('active');
        $('.examples-box .title').html(initStory.title);
        $('.examples-box .main-text .text').html(initStory.mainText);
        $('.examples-box .highlight-text').html(initStory.highlightText);
        $('.examples-box .highlight-text').css('margin-top',$('.examples-box .title').outerHeight(true));


        $('.examples-box .item-wrapper').bind('touchstart click', function(e) {
            e.preventDefault();

            // Get values
            var data = $(this).children('.nav-item').data();
            var story = content.themes[data.theme].subtopics[data.subtopic].stories[data.country];
            var title = $('.examples-box').find('.main-text .title');
            var text = $('.examples-box').find('.main-text .text');
            var highlight = $('.examples-box').find('.second .highlight-text');

            // Set the active class for clicked item (and remove from all others)
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            title.html(story.title);
            text.html(story.mainText);
            highlight.html(story.highlightText);

            highlight.css('margin-top', title.outerHeight(true));


            return false; // Exit this function so second event not triggered
        })
    });
})(jQuery);

/*/!*        // Food and Nutritional Security (0)
        {'subtopics': [
            {
                'title': "Strategies for increasing food production and provisioning",
                'stories': {

                    }
                }
            }],
        ]
};*!/
       /!*'subtopics': {
           'subtopic-1': {
               'sudan': {
                   'title': "Enhancing traditional women's gardens to improve food security in Suday",
                   'mainText': "In Sudan, two main types of approaches were developed across the four target states. In the River Nile State, targeted households received technical input and support to improve their individual home gardens. In North Kordofan and Gedarif, where water access is a cause for concern, the focus was on providing water access to collective land for vegetable cultivation. These collective plots, traditionally referred to as Jubraka, which means home garden, are managed by groups typically made up of ten to twelve women, and one man. The Jubraka have greatly contributed to diversifying food crops, particularly in the dry season. In addition, women received technical assistance to increase goat milk production, plant trees on the edge of cultivated land, and grow seedlings for different crops.",
                   'highlightText': "The Jubraka or ‘home garden’, have greatly contributed to diversifying food crops, particularly in the dry season."
               },
               'cabo-verde': {
                   'title': "A story about something in Cabo Verde",
                   'mainText': "This is a story about something in Cabo Verde. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                   'highlightText': "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
               },
               'haiti': {
                   'title': "A story about something in Haiti",
                   'mainText': "This is a story about something in Haiti. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                   'highlightText': "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
               }
           },
           'subtopic-2': {
               'niger': {
                   'title': "A story about something in Niger",
                   'mainText': "This is a story about something in Cabo Verde. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                   'highlightText': "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
               },
               'Cambodia': {
                   'title': "A story about something in Cambodia",
                   'mainText': "This is a story about something in Haiti. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                   'highlightText': "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
               }
           }
       }
    },
    'theme-2': {

    },
    'theme-3': {

    }*!/
}

/!*var content = [
    {
        'title': 'Enhacing traditional women’s gardens to improve food security in Sudan',
        'mainText': 'In Sudan, two main types of approaches were developed across the four target states. In the River Nile State, targeted households received technical input and support to improve their individual home gardens. In North Kordofan and Gedarif, where water access is a cause for concern, the focus was on providing water access to collective land for vegetable cultivation. These collective plots, traditionally referred to as Jubraka, which means home garden, are managed by groups typically made up of ten to twelve women, and one man. The Jubraka have greatly contributed to diversifying food crops, particularly in the dry season. In addition, women received technical assistance to increase goat milk production, plant trees on the edge of cultivated land, and grow seedlings for different crops.',
        'highlightText': 'The Jubraka or ‘home garden’, have greatly contributed to diversifying food crops, particularly in the dry season.'

    },
    {
        'title': 'Something about the project in Cambodia',
        'mainText': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>',
        'highlightText': 'Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.'
    },
    {
        'title': 'This is about something good that happened in Cabo Verde',
        'mainText': '<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p><p>Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt.</p>',
        'highlightText': 'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.'
    },
    {
        'title': 'This was a really successful thing from Haiti',
        'mainText': '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada.</p><p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada.</p><p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</p>',
        'highlightText': 'Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.'
    },
    {
        'title': 'Some exciting news from Mali',
        'mainText': '<p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada.</p>',
        'highlightText': 'Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
    },
]*!/

/!*var subtopic01 = new Swiper('.swiper-container-sub-01', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
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
        var realIndex = e.slides.eq(e.activeIndex).attr('data-swiper-slide-index');
        console.log(content[realIndex]);
        $('#dynamicContentContainer').find('.title').html(content[realIndex].title);
        $('#dynamicContentContainer').find('.highlight-text').html(content[realIndex].highlightText);
        $('#dynamicContentContainer').find('.main-text').html(content[realIndex].mainText);
    }
});

subtopic01.on('slideChangeEnd', function(e) {
    var realIndex = e.slides.eq(e.activeIndex).attr('data-swiper-slide-index');
    $('#dynamicContentContainer').find('.title').html(content[realIndex].title);
    $('#dynamicContentContainer').find('.highlight-text').html(content[realIndex].highlightText);
    $('#dynamicContentContainer').find('.main-text').html(content[realIndex].mainText);
}); */

$('.topic-navigation a').on('click', function(e) {
    var me = $(this);
    var index = me.data('index');
    swiper.slideTo(index);

    $(this).parents('ul').children('li').each(function() {
        $(this).removeClass('active');
    });

    $(this).parent('li').addClass('active');

});



