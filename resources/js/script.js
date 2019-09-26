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
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5,
                    loop: false
                }
            }
        })
    });

    $(".owl-prev").click(function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

    $(".owl-next").click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
    

    var skillTopOffset = $(".skill-section").offset().top;

    //When window scrolled, it will excute the easy pie chart code
    $(window).scroll(function () {
        if (window.pageYOffset > skillTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#ed7575',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    });
    
    $("[date-fancybox]").fancybox();
    
    $(".items").isotope({
        filter:'*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});
