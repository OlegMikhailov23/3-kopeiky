'use strict';

(function () {
    var btnToTop = document.querySelector('.btn-to-top');

    var onScrollShow = function () {
      if (window.scrollY > 300) {
          btnToTop.style.opacity = '1';
          btnToTop.style.height = '50px';
          btnToTop.style.width = '50px';
      } else {
          btnToTop.style.opacity = '0';
          btnToTop.style.height = '0px';
          btnToTop.style.width = '0px';
      }
    };

    var onTopBtnClick = function () {
      $('body,html').animate( { scrollTop: 0 }, 800);
    };
    window.addEventListener('scroll', onScrollShow);
    btnToTop.addEventListener('click', onTopBtnClick);
})();
