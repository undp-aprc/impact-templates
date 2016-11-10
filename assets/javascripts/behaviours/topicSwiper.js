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
                            'mainText': "<p>In Sudan, two main types of approaches were developed across the four target states. In the River Nile State, targeted households received technical input and support to improve their individual home gardens. In North Kordofan and Gedarif, where water access is a cause for concern, the focus was on providing water access to collective land for vegetable cultivation. These collective, plots traditionally referred to as Jubraka, which means home garden, are managed by groups typically made up of ten to twelve women, and one man. The Jubraka have greatly contributed to diversifying food crops, particularly in the dry season. In addition, women received technical assistance to increase goat milk production; plant trees on the edge of cultivated land, and grow seedlings for different crops.</p><p>Given that tending home gardens is largely a female practice, building on it supports women in expanding their role in food production by growing food that improves family nutrition and/or generates profit they can control.</p>",
                            'highlightText': "The Jubraka or ‘home garden’, have greatly contributed to diversifying food crops, particularly in the dry season."
                        },
                        'cambodia': {
                            'title': "Home gardens in Cambodia: A source of nutrition, gifts and income",
                            'mainText': "<p>The home garden, a traditional practice of the women of the household, prevails through many parts of South-East Asia, and was an important aspect of the strategy adopted for enhancing climate-resilient food production in Cambodia. A significant feature developed was the 12-month cropping calendar, as water is available throughout most of the year due to newly introduced water tanks provided by the project. Agricultural officers advise on the best crops to grow in each season, and how to sequence plantings in order to optimize the productive capacity of the small homesteads. This provides food items and revenues over the entire year. Where periods of food shortages remain, these are shorter and less severe (e.g. in Kratie Province, Cambodia, food shortages reduced from 3-4 months to 1-2 months). There are also reports of positive impacts on health linked to pesticide-free cultivation of vegetables.</p><p>Findings from the project suggest that farmers are earning, on average, an additional US$500 per year through the sale of produce from home gardens.</p>",
                            'highlightText': 'Findings from the project suggest that farmers are earning, on average, an additional US$500 per year through the sale of produce from home gardens.'
                        },
                        'cabo-verde': {
                            'title': "Improving food security and diversifying food consumed through drip irrigation",
                            'mainText': "<p>In Cabo Verde, a food security survey was conducted at the start of the project in order to identify areas of high, medium and low food security in the two targeted islands of Santiago and Santo Antão. The project used this study to select target sites most affected by chronic food insecurity. In the selected sites, most farmers employ drip-irrigation, which improves productivity but is expensive to install, to increase food production and agricultural incomes. Crops produced on drip-irrigated terraced fields include banana, papaya, sweet potato, cassava, sugar cane, carrot, cabbage, mango, coconut and avocado, which are consumed at the household level and sold in the local market.</p><p>Through the project, access to drip-irrigation was expanded in several target communities. A woman from Santa Cruz Municipality, who received drip-irrigation, explains its impacts, “Instead of rice, rice, rice, we now eat more diversified food.” There is also evidence that the additional food and revenues obtained from drip-irrigated fields improve social relations and ‘family harmony’. Women from Santa Cruz Municipality mention the importance of ‘food gifts’ in their community, and reduced tensions in their homes as there is more money to go around and less concern about the future. “A well-fed household is a household with tranquility, ” says another woman from Santa Cruz.</p>",
                            'highlightText': '“Instead of rice, rice, rice, we now eat more diversified food.” There is also evidence that the additional food and revenues obtained from drip-irrigated fields improve social relations and ‘family harmony’.'
                        },
                        'niger': {
                            'title': "Boosting women’s food provisioning role through collective gardens in Niger",
                            'mainText': "In Niger, the chosen approach of the project consisted of securing access to collective plots of land for groups of women and men to grow vegetables. This strategy had tangible outcomes, not only in terms of food production, but also in terms of reducing seasonal vulnerability and opening up new areas for women’s food provisioning roles. As the project expanded, further support was provided to the women by providing access to resources such as donkey carts (to transport vegetables to the market), and offering literacy classes (to help them keep accounts of their revenues).</p><p>The Village Head of Tondikiwindi (a man) praises women for their work and determination, “We are healthier now. Hunger is the worst illness. Now that we eat properly, fewer people fall sick. And this is especially noticeable with children.”</p>",
                            'highlightText': '“We are healthier now. Hunger is the worst illness. Now that we eat properly, fewer people fall sick. And this is especially noticeable with children.”'
                        },
                    },
                },
                {
                    'title': "Diversifying livelihood options",
                    'stories': {
                        'cabo-verde': {
                            'title': "Insuring food security and revenue generation in Cabo Verde",
                            'mainText': "<p>The project initiated activities such as pig-rearing and rehabilitation of fish-processing units in coastal zones. These sources of revenue and ‘insurance’ in case of crop failure provided an alternative to revenues earned by women from sand extraction (an illegal activity). The fish processing units augmented the women’s main livelihood from processing and selling fish in coastal communities, and helped increase their revenue.</p>",
                            'highlightText': "These sources of revenue and ‘insurance’ in case of crop failure provided an alternative to revenues earned by women from sand extraction."
                        },
                        'haiti': {
                            'title': "Introducing revenue generation through crop diversification in Haiti",
                            'mainText': "<p>Through the project, women beneficiaries were engaged in seedling production for reforestation and mangrove. Women have introduced fruit tree species – in addition to wood-producing species – into the nurseries. As a means of diversifying food and income sources, they made use of the new crops introduced, such as fresh fruits (citrus, mangoes, avocados), to produce products such as jams and jellies.</p>",
                            'highlightText': 'As a means of diversifying food and income sources, they made use of the new crops introduced, such as fresh fruits (citrus, mangoes, avocados), to produce products such as jams and jellies.'
                        },
                        'mali': {
                            'title': "Non-agricultural livelihood activities in Mali",
                            'mainText': "<p>Sewing workshops and soap and ointment production were some of the innovations providing income generation for young women who don’t have access to other resources/livelihoods. These activities emphasize diﬀerent ways of enhancing adaptive capacity of women (especially those who do not have access to agricultural resources) in the local context.</p>",
                            'highlightText': 'Soap and ointment production were some of the innovations providing income generation for young women who don’t have access to other resources/livelihoods.'
                        },
                    },
                },
                {
                    'title': "Transforming social norms in food production",
                    'stories': {
                        'cambodia': {
                            'title': "Improving adaptive capacities of women headed households in Cambodia",
                            'mainText': "<p>Women heads of vulnerable households have been able to focus their time and energy on home gardens instead of seeking low-paying jobs as daily labourers. The practice of collecting wild tubers, an ‘extreme’ coping mechanism poor women resort to in many countries, is reported to be ‘something of the past’ by women from beneficiary communities.</p>",
                            'highlightText': "The practice of collecting wild tubers, an ‘extreme’ coping mechanism poor women resort to in many countries, is reported to be ‘something of the past’ by women from beneficiary communities."
                        },
                        'mali': {
                            'title': "Transforming land ownership norms in Mali",
                            'mainText': "<p>One of the women’s associations from the Sandaré Commune has been able to buy a one-ha piece of land with its cumulated savings (550,000 FCFA, equivalent to US$950). The association built its earnings from the sale of food crops and the leasing of agricultural equipment provided through the project.</p>",
                        },
                    },
                }]
        },
        {
            'title': 'Water and access to water',
            'subtopics': [
                {
                    'title': "Managing water-related conflicts during times of water stress",
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
                },
                {
                    'title': "Gender differences in access to water for domestic use and irrigation",
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
                },
                {
                    'title': "Promoting the participation and leadership of women in water management",
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
            console.log(story.highlightText);

            title.html(story.title);
            text.html(story.mainText);
            if (typeof story.highlightText !== 'undefined') {
                highlight.html(story.highlightText);
            } else {
                highlight.html('<p></p>');
            }

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



