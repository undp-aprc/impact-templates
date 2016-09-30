(function($) {
    $(document).ready(function(e){
        var updateProjectTotal = function (dataSet) {
            var data = dataSet[0].data;
            var sum = data.reduce(add, 0);
            $('#numProjects').html(sum);
        }

        function add(a, b) {
            return a + b;
        }

        updateProjectTotal(RegionData['sp1']);
        mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1jY2EiLCJhIjoiY2lqdzNnZTRjMGhrYnRxbTVqdXN1bG1jciJ9.XYxJ9kfNn5Dd_CNVytKTjw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/undp-cca/citcfau7b000v2jp2r1jj2me9',
            zoom: 1,
            minZoom: 1,
            maxZoom: 3,
            pitch: 10,
            center: [30, 0]
        });

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
                layers.appendChild(link);
                map.setLayoutProperty(id, 'visibility', 'none'); // Set all layers to invisible
            }

            // But start by showing SP1
            map.setLayoutProperty('sp1', 'visibility', 'visible');
            $('#btn-sp1').toggleClass('active');

            $('.toggle-btn').on('click', function(e) {
                var clickedLayer = this.dataset.id;
                e.preventDefault();
                e.stopPropagation();

                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

                if (visibility === 'none') { // This block toggles active state of layers
                    // Find any other items that are active and deactivate them before making the clicked layer active
                    var activeLayers = $(this).parent('#menu').children('.active');
                    activeLayers.each(function(i){
                        var layerId = activeLayers[i].dataset.id;
                        map.setLayoutProperty(layerId, 'visibility', 'none');
                        $('#btn-'+layerId).removeClass('active');
                        $('#container-'+layerId).removeClass('active');
                    });
                    // All deactive now, so make the clicked layer active
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                    $(this).addClass('active');
                    $('#container-'+clickedLayer).addClass('active');
                    // Update the chart
                    SPChart.data.datasets = RegionData[clickedLayer];
                    updateProjectTotal(RegionData[clickedLayer]);
                    SPChart.update();
                    SPChart.render(1000, false);
                }
            });
        });
    });
})(jQuery);