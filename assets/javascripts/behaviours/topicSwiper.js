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
                        'cabo-verde': {
                            'title': "Preventing water-related conflicts in Cabo Verde",
                            'mainText': "Evidence from focus-group discussions held in Cabo Verde further suggests that conﬂicts around water use are frequent at household and community levels, especially in times of water stress. A young female representative from the Ministry of Rural Development20 stresses how tensions also arise between women and men farmers within the community. She explains that when the water level in the dam decreases, farmers using dam water for irrigation begin to fight. In other words, when water resources become scarce, male farmers often have the upper hand. The local official emphasized that a mechanism ensuring gender-equitable distribution of water was needed, but had not been treated as a priority. Complementing the existing small-scale investments in local water management, the UNDP intervention is making larger and more complex investments in water capture, storage and distribution, and investments targeting highly vulnerable sites.",
                            'highlightText': "Complementing the existing small-scale investments in local water management, the UNDP intervention is making larger and more complex investments in water capture, storage and distribution, and investments targeting highly vulnerable sites."
                        }
                    }
                },
                {
                    'title': "Gender differences in access to water for domestic use and irrigation",
                    'stories': {
                        'cambodia': {
                            'title': "Enhancing water access for vulnerable households in Cambodia",
                            'mainText': "Ms. Kin S. is a member of the Water-User Group in Svay Chek, Sambour District. She is a single woman who takes care of four people (a child of her own, two orphans and her mother). She doesn’t have any rice fields (the primary cash crop). However, after connecting to a water tank under the UNDP adaptation project, she has been able to grow cabbage, radish, onion, lemongrass, papaya and banana trees in her backyard. Her water bills have decreased considerably: she only has to pay 1000 Riels (US$0.25) to fill up her two 1000 m3 jars now, as opposed to 10,000 Riels (US$2.50) when she had to buy from local water sellers. Now she no longer needs to work as a daily agricultural labourer, thus making her life easier, as she can work in her garden while being present for the kids.",
                            'highlightText': "After connecting to a water tank under the UNDP adaptation project, she has been able to grow cabbage, radish, onion, lemongrass, papaya and banana trees in her backyard."
                        },
                        'cabo-verde': {
                            'title': "Enhancing water access for vulnerable households in Cabo Verde",
                            'mainText': "Ms. Filomena F. is a widow in Órgãos Pequeno settlement on Santiago Island and heads a nine-member household (herself, her daughter, her son and six grandchildren). The Canada-UNDP Climate Change Adaptation Facility project targets the most vulnerable households and the criteria include: large number of people, limited livelihood options and women-headed. Ms. Filomena fit the profile and an individual water tank was installed in front of her house. “I’m so happy with this. It’s a clean way of storing water for daily use, and there are fewer mosquitoes than when water is stored in containers around the house,” she says. She pays 570 Escudos (US$6.50) for 5 m3. When asked about the most significant change this water tank has made to her life, Ms. F. highlights two changes: i) not having to go down to the well in the middle of the night; and ii) no longer having to put up with social tensions around water in the dry season. She goes on to explain that the well is where villagers without a connection to the public network get water. It is located about 200 m down the hill.",
                            'highlightText': "“I’m so happy with this. It’s a clean way of storing water for daily use, and there are fewer mosquitoes than when water is stored in containers around the house,”"
                        },
                        'sudan': {
                            'title': "Innovative technologies to improve water access in Sudan",
                            'mainText': "Before the project, sourcing water for domestic use was a very difficult task: it took a lot of time and huge efforts to get water. Sometimes conflicts with regard to access to water, erupted between people. “The skin on our hands would crack from constantly pulling up the rope to lift the water pail from the well. We spent so much time for collecting water whereas now, it’s so easy for us to get water by using the pump and the water pipe” (a woman from North Kordofan region). The UNDP adaptation projects have introduced a range of strategies and technologies (such as solar-powered water pumps), to strengthen access to water for drinking and other domestic uses. “Now I am no longer skipping my classes because the water problem is now solved”, recounts Badr Eldin, a nine-year-old boy from Siraj Alnour village in Gedarif.",
                            'highlightText': "“The skin on our hands would crack from constantly pulling up the rope to lift the water pail from the well. We spent so much time for collecting water whereas now, it’s so easy for us to get water by using the pump and the water pipe”"
                        },
                        'sri-lanka': {
                            'title': "Strengthening the resilience of smallholder farmers in the Dry Zone through an integrated approach to water management in Sri Lanka",
                            'mainText': "The project in Sri Lanka developed and disseminated climate resilient agricultural practices with targeted enterprise development for women. The project was successful in establishing farmer-level seed nurseries with women producer groups to support adoption of climate-resilient crops. The observed impact was strengthened resilience of smallholder farmers, particularly women, in the Dry Zone through improved water management to enhance lives and livelihoods.",
                            'highlightText': "The observed impact was strengthened resilience of smallholder farmers, particularly women, in the Dry Zone through improved water management to enhance lives and livelihoods."
                        },
                    }
                },
                {
                    'title': "Promoting the participation and leadership of women in water management",
                    'stories': {
                        'cambodia': {
                            'title': "Encouraging women’s participation through water-user groups in Cambodia",
                            'mainText': "The formation of groups to manage water resources to regulate use and avert social conflicts. Two categories of groups were formed: Farmer Water-User Committees (FWUCs) to manage water for irrigation purposes, and Water-User Groups (WUGs) to manage domestic water supply. Provincial-level staff responsible for implementing the project invested a significant amount of time and resources to oversee the formation of these groups at the village level, to build their capacity, and to ensure the effective participation of women in both groups (for more details, see Box 13 in the section on participation, decision-making and leadership). In addition to increasing local capacity for management and control over water resources, this approach also contributed to gender-responsive outcomes. Data collected from villages in Kratie Province suggest that the provision of water access combined with the creation of management groups led to significant positive changes in gender dynamics at the household level. These changes included reduced tensions between women and men, as they co-manage the WUGs, leading to shared decision-making at the household level. Women have also gained skills in water management and can take part in decisions regarding water use.",
                            'highlightText': "In addition to increasing local capacity for management and control over water resources, this approach also contributed to gender-responsive outcomes."
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



