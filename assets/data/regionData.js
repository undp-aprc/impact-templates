var SPChart;
var chartData = {};

var RegionData = {
    'sp1': [
        {
            data: [
                62,
                37,
                5,
                9,
                7,
                5
            ],
            backgroundColor: [
                '#ee7a4b',
                '#ee7a4b',
                '#ee7a4b',
                '#ee7a4b',
                '#ee7a4b',
                '#ee7a4b',
                '#ee7a4b',
            ]
        }
    ],
    'sp2': [
        {
            data: [
                43,
                20,
                6,
                7,
                4,
                0
            ],
            backgroundColor: [
                '#bc2137',
                '#bc2137',
                '#bc2137',
                '#bc2137',
                '#bc2137',
                '#bc2137',
                '#bc2137'
            ]
        }
    ],
    'sp3': [
        {
            data: [
                29,
                19,
                8,
                5,
                4,
                0
            ],
            backgroundColor: [
                '#86c1e6',
                '#86c1e6',
                '#86c1e6',
                '#86c1e6',
                '#86c1e6',
                '#86c1e6',
                '#86c1e6'
            ]
        }
    ],
    'sp4': [
        {
            data: [
                46,
                26,
                7,
                7,
                7,
                1
            ],
            backgroundColor: [
                '#1b7e12',
                '#1b7e12',
                '#1b7e12',
                '#1b7e12',
                '#1b7e12',
                '#1b7e12',
                '#1b7e12',
            ]
        }
    ],
    'sp5': [
        {
            data: [
                50,
                38,
                10,
                9,
                6,
                1
            ],
            backgroundColor: [
                '#1085fc',
                '#1085fc',
                '#1085fc',
                '#1085fc',
                '#1085fc',
                '#1085fc',
                '#1085fc',
                '#1085fc',
            ]
        }
    ],
    'sp6': [
        {
            data: [
                48,
                37,
                8,
                8,
                7,
                2
            ],
            backgroundColor: [
                '#7e247f',
                '#7e247f',
                '#7e247f',
                '#7e247f',
                '#7e247f',
                '#7e247f',
                '#7e247f',
                '#7e247f'
            ]
        }
    ]
};

(function($) {
    $(document).ready(function() {
        var ctx = $("#regionsChart");

        chartData.labels = ['Africa', 'Asia and the Pacific', 'Latin & Central America', 'Arab States', 'Europe & Central Asia', 'Global'];
        chartData.datasets = RegionData.sp1;

        var options = {
            legend: {
                display: false
            },
            animation: {
                easing: 'easeOutElastic',
                duration: 1000,
            }

        }

        SPChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: chartData,
            options: options
        });


    });
})(jQuery);