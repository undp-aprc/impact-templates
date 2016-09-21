(function($) {
    $(document).ready(function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1jY2EiLCJhIjoiY2lqdzNnZTRjMGhrYnRxbTVqdXN1bG1jciJ9.XYxJ9kfNn5Dd_CNVytKTjw';
        var map = new mapboxgl.Map({
            container: 'signature-programme-map',
            style: 'mapbox://styles/mapbox/dark-v9',
            zoom: 1,
            center: [0, 0],
        });

        map.on('load', function() {
            map.addSource('sp1', {
                type: 'vector',
                url: 'mapbox://styles/undp-cca/citc8z0iz00032hoggnbbubwj'
            });

            map.addLayer({
                id: 'SP1',
                type: 'vector',
                source: 'sp1',
                layout: {
                    visibility: 'visible'
                },
                'source-layer': 'sp1-8iop06',
                paint: {
                    'fill-color': 'rgba(61,153,80,0.55)'
                }
            });
        })
    })
})(jQuery);