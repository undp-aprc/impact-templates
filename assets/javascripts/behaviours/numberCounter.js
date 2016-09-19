(function($) {
    $(document).ready(function() {
        var val = $('.count-num').text();
        $('.count-num').animate({countNum: val}, {
            duration: 3000,
            easing:'swing',
            step: function() {
                // What todo on every count
                //console.log(Math.floor(this.countNum));
                $('.count-num').text(Math.ceil(this.countNum)).digits();
            },
            complete: function() {

            }
        });
    });
}) (jQuery);

$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}