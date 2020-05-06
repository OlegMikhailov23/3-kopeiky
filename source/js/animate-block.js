jQuery(document).ready(function() {
    jQuery('.intro__article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 200
       });
    jQuery('.cases__title').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
       });
    jQuery('.cases__article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
    jQuery('.cases__items-item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
    jQuery('.gallery__article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
    jQuery('.price__title').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
    jQuery('.price__article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
    jQuery('.price__container').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
       });
});
