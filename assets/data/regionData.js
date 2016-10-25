var SPChart;
var chartData = {};

var RegionData = {
    'sp1': {
        'title': 'Supporting Integrated Climate Change Strategies',
        'description': 'UNDP supports countries to formulate Integrated Climate Change Strategies that will assist national and sub-national governments to develop and strengthen policies, institutions, capacities and knowledge for integrated green, low-emission and climate resilient development. It also involves utilising a full range of supportive financing mechanisms to support that development.',
        'data' : {
            'geographical': {
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
                    '#f0875d',
                    '#f1956f',
                    '#f3a281',
                    '#f5af93',
                    '#f7bda5',
                    '#f8cab7',
                ]
            }
        }
    },
    'sp2': {
        'title': 'Advanced Cross-Sectoral Climate Resilient Livelihoods',
        'description': 'The UNDP is scaling up climate resilient livelihoods and risk management. This includes advancing Climate Resilient Livelihoods, supports countries to advance sustainable economic development in rural areas in the face of climate change. Assistance is also provided to strengthen climate information and early warning systems for climate resilient development in developing countries.',
        'data': {
            'geographical': {
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
                    '#c3374b',
                    '#c94d5f',
                    '#d06473',
                    '#d77a87',
                    '#de909b',
                    '#e4a6af'
                ]
            }
        }
    },
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
                '#92c7e9',
                '#aad4ee',
                '#b6daf0',
                '#c3e0f3',
                '#cfe6f5',
                '#dbecf7'
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
                '#328b2a',
                '#499841',
                '#5fa559',
                '#76b271',
                '#8dbf89',
                '#a4cba0',
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
                '#2891fc',
                '#409dfd',
                '#58aafd',
                '#70b6fd',
                '#88c2fe',
                '#9fcefe',
                '#b7dafe',
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
                '#8b3a8c',
                '#985099',
                '#a566a5',
                '#b27cb2',
                '#bf92bf',
                '#cba7cc',
                '#d8bdd9'
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
                display: true,
                position: 'bottom'
            },
            animation: {
                easing: 'easeOutElastic',
                duration: 1000,
            },
            responive: true,
            maintainAspectRatio: false,
        }

        SPChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: options
        });


    });
})(jQuery);