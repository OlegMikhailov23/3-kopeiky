
$(document).ready(function(){
$('.gallery-slide').owlCarousel({
        loop:true,
        dots:false,
        items: 2,
        autoplay: true,
        nav: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 10000,
        mouseDrag: true,
        touchDrag: true,
        margin: 0,
        responsive:{
            0:{
                items:1,
                dots: false
            },
            700:{
                items:3,
                nav: true,
                dots: false,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
            }
        }
    });

});
