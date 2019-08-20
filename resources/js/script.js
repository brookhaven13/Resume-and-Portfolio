$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Game Developer.", "Web Developer.", "3D Modeling Designer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel();
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#ed7575',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to , percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});
