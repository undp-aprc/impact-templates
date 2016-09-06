(function($) {
    $(document).ready(function() {
        var ctx = $('#financeChart');
        
        var data = {
            labels: [
                "UNDP",
                "Green Climate Fund",
                "Ministry of Finance, Government of Maldives"
            ],
            datasets: [{
                    label: 'Project Finance',
                    data: [
                        100000,
                        23000000,
                        4500000
                    ],
                    backgroundColor: [
                        '#0055AA',
                        '#ABC94D',
                        '#BFE7F4'
                    ],
                    hoverBackgroundColor: [
                        '#4080BF',
                        '#C0D77A',
                        '#80CFEA'
                    ],
                    borderWidth: [
                        0, 0, 0
                    ]
                }]
        };

        var donorChart = new Chart(ctx, {
            type: "doughnut",
            data: data,
            options : {
                cutoutPercentage: 80,
                animation: {
                    animateScale:true
                }
            }
        })
    })
})(jQuery);