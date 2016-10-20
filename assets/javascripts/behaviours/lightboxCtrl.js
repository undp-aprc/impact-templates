(function($) {
    $(document).ready(function() {

        $('#closeLightbox').on('touchstart click', function(e) {
            $(this).parents('.lightbox-container').removeClass('active');
            return false;
        });

        $('.view-content').on('touchstart click', function(e) {
            $('.sdg-tiles li').remove(); // Remove existing items from .sdg-tiles
            var me = $(this);
            var lightbox = $('#lightbox');
            var lightboxCtrl = me.parents('.lightbox-ctrl');
            var baseUrl = '/assets/images/slides/';

            lightbox.addClass('active');

            var storyIndex = lightboxCtrl[0].dataset.slickIndex;
            var story = ImpactStories[storyIndex];

            lightbox.find('.content-box.text .title').html(story.title);
            lightbox.find('.content-box.text .text').html(story.text);
            lightbox.find('.content-box.image img').attr('src', baseUrl+story.image);

            // Handle the SDG tiles
            sdgs = story.sdgs;

            for (var i = 0; i < sdgs.length; i++) {
                var tileId = stringify(sdgs[i]);
                $('.sdg-tiles').append('<li><img src="/assets/images/sdgs/sdg-'+tileId+'.png" /></li>');
            }
            return false;

        });

        // Takes an integer and returns it as a string with 0 appended if single digit
        function stringify(int) {
            if (int < 10) {
                return String('0'+int);
            }
            return String(int);
        }


    });
})(jQuery);