(function($) {
    $(document).ready(function(e){
        //updateProjectTotal(RegionData['sp1']);
        mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1jY2EiLCJhIjoiY2lqdzNnZTRjMGhrYnRxbTVqdXN1bG1jciJ9.XYxJ9kfNn5Dd_CNVytKTjw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/undp-cca/citcfau7b000v2jp2r1jj2me9',
            zoom: 1,
            minZoom: 1,
            maxZoom: 3,
            pitch: 10,
            center: [30, 0],
        });
        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl({position:'bottom-right'}));

        map.on('load', function() {
            mapSpinner.stop();
            var toggleableLayerIds = [ 'sp1', 'sp2', 'sp3', 'sp4', 'sp5', 'sp6' ];
            var labels = ['SP1', 'SP2', 'SP3', 'SP4', 'SP5', 'SP6'];

            for (var i = 0; i < toggleableLayerIds.length; i++) {
                var id = toggleableLayerIds[i];
                var label = labels[i];

                var link = document.createElement('a');
                link.href = '#';
                link.className = 'toggle-btn';
                link.textContent = label;
                link.dataset.id = id;
                link.id = 'btn-'+id;

                var layers = document.getElementById('menu');
                /*layers.appendChild(link);*/
                map.setLayoutProperty(id, 'visibility', 'none'); // Set all layers to invisible
            }

            // But start by showing SP1
            map.setLayoutProperty('sp1', 'visibility', 'visible');
            $('#btn-sp1').toggleClass('active');

            $('#spSelect').on('change', function(e) {
                var selectedLayer = e.target.value;
                var visibility = map.getLayoutProperty(selectedLayer, 'visibility');

                for (var i = 0; i < toggleableLayerIds.length; i++) {
                    map.setLayoutProperty(toggleableLayerIds[i], 'visibility', 'none');
                    $('#container-'+toggleableLayerIds[i]).removeClass('active');
                }

                map.setLayoutProperty(selectedLayer, 'visibility', 'visible');
                $('#container-'+selectedLayer).addClass('active');

                SPChart.data.datasets = RegionData[selectedLayer].data.geographical;

                SPChart.update();
                SPChart.render(1000, true);

                $('#spDynamicContent .container.text .title').html(RegionData[selectedLayer].title);
                $('#spDynamicContent .container.text .description').html(RegionData[selectedLayer].description);
            });
        });
    });
})(jQuery);