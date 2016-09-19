(function($) {
    $(document).ready(function() {
        var ctx = $("#sp1Regions");

        var data = {
            labels: [
                'Africa',
                'Asia and the Pacific',
                'Latin & Central America',
                'Arab States',
                'Europe & Central Asia',
                'Global'
            ],
            datasets: [
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
            ]
        };

        var options = {
            legend: {
                display: false
            }
        }

        var myBarChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: options
        });


    });
})(jQuery);