(function($) {
    $(document).ready(function() {
        var ctx = $("#countryBalanceChart");
        var ctxLegend = $("#countryBalanceChartLegend");

        var data = {
            labels: [
                'Least Developed Countries (LDCs)',
                'Developing Countries (Non-LDCs)',
                'Small Island Developing States (SIDS)'
            ],
            datasets: [
                {
                    data: [
                        47,
                        20,
                        18
                    ],
                    backgroundColor: [
                        '#0055aa',
                        '#009ed4',
                        '#e84e0f'
                    ]
                }
            ]
        };

        var options = {
            legend: {
                display: false
            }
        }

        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });

    });
})(jQuery);