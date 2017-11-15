jQuery(document).ready(function() {
    // Fancybox

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            showOnStart: true,
            loop: true
        },
        hash : true
    });

    $('[data-fancybox="logo"]').fancybox({
        thumbs : {
            showOnStart: true,
            loop: true
        },
        hash : true
    });

    $('[data-fancybox="bag"]').fancybox({
        thumbs : {
            showOnStart: true,
            loop: true
        },
        hash : true
    });

    $('[data-fancybox="sites"]').fancybox({
        thumbs : {
            showOnStart: true,
            loop: true
        },
        hash : true
    });

    //Tabs background

    jQuery("a[href='#complex']").on("click", function() {
        jQuery(".front-page").addClass('bg-small');
    });
    jQuery("a[href='#steps']").on("click", function() {
        jQuery(".front-page").removeClass('bg-small');
    });

    //Headhesive

    var options = {
        offset: 500,
        throttle: 250
    };
    var header = new Headhesive('.header-scroll', options);

    // Portfolio photo

    // $('.portfolio-navigate li').on('click', function (e) {
    //     e.preventDefault();
    //     var category_name = $(this).attr('data-type'),
    //         images = $('.portfolio-slider img');
    //     $(this).parent().find('.active').removeClass('active');
    //     $(this).addClass('active');
    //     $(images).each(function() {
    //         var img_title = $(this).attr('title');
    //         if(category_name == img_title || category_name == 'all') {
    //             $(this).parent().find('.over_blue').removeClass('over_blue_active');
    //         } else {
    //             $(this).parent().find('.over_blue').addClass('over_blue_active');
    //         }
    //     });
    // })
});

window.onload = function() {
    $('.portfolio-items img').each(function(){$(this).show();});
};

// Slick slider portfolio

$( document ).ready(function () {
    $.fn.randomize = function (selector) {
        var $elems = selector ? $(this).find(selector) : $(this).children(),
            $parents = $elems.parent();

        $parents.each(function () {
            $(this).children(selector).sort(function (childA, childB) {
                // * Prevent last slide from being reordered
                if($(childB).index() !== $(this).children(selector).length - 1) {
                    return Math.round(Math.random()) * 2.5;
                }
            }.bind(this)).detach().appendTo(this);
        });
        return this;
    };

    $('.responsive').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Reviews slider

    $('.responsive-rev').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Logo slider

    $('.responsive-logo').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Bag slider

    $('.responsive-bag').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Site slider

    $('.responsive-site').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

// Sites carousel$(document).ready(function() {
$(document).ready(function() {
    jQuery('.nav-tabs').on('click', function(){

        jQuery('.responsive-site').find('#slick-slide30').trigger('click');
        jQuery('.responsive-logo').find('#slick-slide10').trigger('click');
        jQuery('.portfolio-slider').find('#slick-slide00').trigger('click');
    });

});

// Portfolio tabs

$(".nav-tabs").find("li a:nth-child(2)").click();
var url = document.URL;
var hash = url.substring(url.indexOf('#'));
$(".nav-tabs").find("li a").each(function(key, val) {
    if (hash == $(val).attr('href')) {
        $(val).click();
    }
    $(val).click(function(ky, vl) {
        location.hash = $(this).attr('href');
    });

// Facebook analytic
    // Submit
    $( '.sbmt-btn' ).click(function() {
        fbq('track', 'Lead', {
            content_name: 'services_order_form',
            content_category: 'order_form',
            value: 0,
            currency: 'USD'
        });
    });

    // Subscribe
    $( '.sbscrb-btn' ).click(function() {
        fbq('track', 'Lead', {
            content_name: 'footer_subscription',
            content_category: 'email_form',
            value: 0,
            currency: 'USD'
        });
    });



    
    
});

