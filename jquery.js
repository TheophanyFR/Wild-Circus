$(document).ready(function() {
    $('#social_media img').mouseenter(function() {
        $(this).animate({top:'-=5px'}, 100);
    });
    $('#social_media img').mouseleave(function() {
        $(this).animate({top:'+=5px'}, 100);
    });
    $('.flexslider').flexslider({
        animation: 'slide',
        animationLoop: false,
        slideshow: false,
        start: function() {
            $('.slides li').show();
        },
    });
});
