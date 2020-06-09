$(document).ready(function () {
  $('.gallery-slide').owlCarousel({
    loop: true,
    dots: false,
    items: 2,
    autoplay: true,
    nav: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 10000,
    mouseDrag: true,
    touchDrag: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      700: {
        items: 3,
        nav: true,
        dots: false,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      }
    }
  });


  $('.price-slide').owlCarousel({
    loop: true,
    dots: false,
    items: 2,
    autoplay: true,
    nav: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 15000,
    mouseDrag: true,
    touchDrag: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      768: {
        items: 2.3,
        nav: true,
        dots: false,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      },
      1140: {
        items: 2,
        nav: true,
        dots: false,
        autoplay: false,
        touchDrag: false,
        mouseDrag: false,
        items: 3
      }
    }
  });

});
