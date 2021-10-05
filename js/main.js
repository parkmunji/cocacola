$(document).ready(function(){
    
    // gnb
    $('#gnb').hover(function() {
        $('header').addClass('hover')
    }, function() {
        $('header').removeClass('hover')
    })
    $('#gnb>li').hover(function() {
        $(this).children('.dep_2').css({'background':'#efefef'})
    }, function() {
        $('#gnb .dep_2').css({'background':'none'})
    })

    // all menu
    $('header .all_menu').click(function() {
        $('header').toggleClass('on');
    })

    $('#gnb>li').click(function() {
        $(this).toggleClass('on')
    })


    // visual_wrap
    $('.visual_slider').slick({
        dots:true,
        draggable:true,
        arrows:true,
        adaptiveHeight:false,
        centerMode:true,
        centerPadding:'15%',
        // autoplay: true,
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                centerPadding:'10%',
            }
            },
            {
            breakpoint: 770,
            settings: {
                centerPadding:'5%',
                arrows:false,
            }
            },
        ],
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (currentSlide !== nextSlide) {
            $('.slick-center + .slick-cloned').each(function(index, node) {
                var $node = $(node);
                
                setTimeout(function() {
                    $node.addClass('slick-current');
                    $node.addClass('slick-center');
                });
            });
        }
    });



    // product slide slick
    $('.product_slide').slick({
        dots:false,
        draggable:true,
        arrows:true,
        centerMode:true,
        slideToShow : 5,
        centerPadding:'40%',
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slideToShow: 3,
                centerPadding : '35%',
            }
            },
            {
            breakpoint: 770,
            settings: {
                slideToShow: 1,
                centerPadding: '10%',
            }
            },
        ],
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (currentSlide !== nextSlide) {
            $('.slick-center + .slick-cloned').each(function(index, node) {
                var $node = $(node);
                
                setTimeout(function() {
                    $node.addClass('slick-current');
                    $node.addClass('slick-center');
                });
            });
        }
    });

    $('.footer_link_wrap button').click(function() {
        $('.footer_link_wrap .fam_site').toggleClass('on')
    })


    

  }); // ready function