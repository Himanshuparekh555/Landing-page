/*
 $ Header Fix On Scroll
*/
; (function ($) {
    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("fixedscroll", (fromTop > 50));
    });
})(jQuery);

/*
 Mobile Navigation
*/
jQuery("#navbar-toggle").click(function () {
    jQuery(".main_nav").addClass("nav-visible");
    jQuery(".menu-overlay").addClass("nav-visible");
});
jQuery(".menu-overlay").click(function () {
    jQuery(".main_nav").removeClass("nav-visible");
    jQuery(".menu-overlay").removeClass("nav-visible");
});

/*
 $ Back to top Scroll
*/
$(document).ready(function () {
    $('.main_nav ul li a').each(function () {
        $(this).bind('click', function (event) {
            $('.main_nav ul li').removeClass("active");
            $(this).parent("li").addClass("active");
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 150 + "px"
            }, 1500, 'easeInOutExpo');
            console.log($($anchor.attr('href')).offset().top - 150 + "px");
            event.preventDefault();
        });
    });
    $(window).scroll(function () {
        var sticky = $('.main_nav'),
            scroll = $(window).scrollTop();
        if (scroll >= 300) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
        if (typeof onScroll !== "undefined") {
            $(document).on("scroll", onScroll);
        }
        $('.main_nav ul li a').each(function () {
            $(this).bind('click', function (event) {
                $('.main_nav ul li').removeClass("active");
                $(this).parent("li").addClass("active");
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 150 + "px"
                }, 1500, 'easeInOutExpo');
                console.log($($anchor.attr('href')).offset().top - 150 + "px");
                event.preventDefault();
            });
        });
    });
    $(".main_nav ul li a").click(function () {
            $('.main_nav,.menu-overlay').removeClass('nav-visible');
    });
});