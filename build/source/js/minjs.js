$(document).ready(function(){$(".gallery-slide").owlCarousel({loop:!0,dots:!1,items:2,autoplay:!0,nav:!0,autoplaySpeed:1e3,autoplayTimeout:1e4,mouseDrag:!0,touchDrag:!0,margin:0,responsive:{0:{items:1,dots:!1},700:{items:3,nav:!0,dots:!1,autoplay:!0,touchDrag:!0,mouseDrag:!0}}}),$(".price-slide").owlCarousel({loop:!0,dots:!1,items:2,autoplay:!0,nav:!0,autoplaySpeed:1500,autoplayTimeout:15e3,mouseDrag:!0,touchDrag:!0,margin:0,responsive:{0:{items:1,dots:!1},768:{items:2.3,nav:!0,dots:!1,autoplay:!0,touchDrag:!0,mouseDrag:!0},1140:{items:3,nav:!0,dots:!1,autoplay:!1,touchDrag:!1,mouseDrag:!1}}})}),$(function(){function t(){n.classList.add("succes-content-hide"),e.classList.add("succes-content-hide"),document.removeEventListener("mouseup",m),document.removeEventListener("keydown",u),setTimeout(function(){o.style.display="none",e.style.display="none",n.style.display="none",n.classList.remove("succes-content-hide"),e.classList.remove("succes-content-hide")},200)}var o=document.querySelector(".modal-background"),s=document.querySelector("#modal-form"),e=document.querySelector("#success-box"),n=document.querySelector("#error-box"),a=document.querySelector("#succes-close-btn"),l=document.querySelector("#error-close-btn"),d=document.querySelector("#form-close-btn"),c=document.querySelector("#recall-btn"),i=document.querySelector(".load"),r=document.querySelector("#modal-form-usermessage"),u=function(e){27===e.keyCode&&(t(),p())},m=function(e){e.target===o&&(t(),p())},p=function(){popup.classList.add("modal-content-hide"),o.style.display="none",document.removeEventListener("keydown",u),document.removeEventListener("mouseup",m),setTimeout(function(){popup.classList.remove("modal-content-show"),popup.classList.remove("modal-content-hide")},250)};a.addEventListener("click",t),l.addEventListener("click",t),c.addEventListener("click",function(){popup.classList.add("modal-content-show"),o.style.display="block",document.addEventListener("keydown",u),document.addEventListener("mouseup",m)}),d.addEventListener("click",p),$("#contacts__form").submit(function(e){e.preventDefault();var t="name="+$("#name").val()+"&phone="+$("#phone").val()+"&message="+$("#message").val();$.ajax({url:"send.php",data:t,type:"post",success:function(e){document.addEventListener("mouseup",m),document.addEventListener("keydown",u),$("#success-box").css("display","block")&&$(".modal-background").css("display","block")&&$("#name").val("")&&$("#phone").val("")&&$("#message").val("")},error:function(){document.addEventListener("mouseup",m),document.addEventListener("keydown",u),$("#error-box").css("display","block")&&$(".modal-background").css("display","block")}})}),$("#modal-form").submit(function(e){e.preventDefault();var t="name="+$("#modal-name").val()+"&phone="+$("#modal-phone").val();$.ajax({url:"send.php",data:t,type:"post",success:function(e){i.style.display="block",setTimeout(function(){i.style.display="none"},800),setTimeout(function(){r.innerText="Ваша заявка принята! Мы свяжемся с вами в течении 15 минут!"},800),setTimeout(function(){r.innerText=" ",s.reset()},8e3)},error:function(){i.style.display="block",setTimeout(function(){i.style.display="none"},800),setTimeout(function(){r.innerText="Что-то пошло не так, повторите попытку позже."},800),setTimeout(function(){r.innerText=" ",s.reset()},8e3)}})})}),$(".logo").on("click",function(e){e.preventDefault(),$(".nav-toggle").removeClass("open"),$(".menu-left").removeClass("collapse"),$("html, body").animate({scrollTop:0},750,"easeInOutQuad")}),$('a[href^="#"]').on("click",function(e){var t=$(this.getAttribute("href"));t.length&&(e.preventDefault(),$("html, body").stop().animate({scrollTop:t.offset().top},750,"easeInOutQuad"))}),$(".nav-toggle").on("click",function(){$(this).toggleClass("open"),$(".menu-left").toggleClass("collapse"),$("nav").toggleClass("menu-left-opened")}),$(".menu-left a").on("click",function(){$(".nav-toggle").removeClass("open"),$(".menu-left").removeClass("collapse"),$("nav").removeClass("menu-left-opened")}),function(){var e=document.querySelector(".btn-to-top");window.addEventListener("scroll",function(){300<window.scrollY?(e.style.opacity="1",e.style.height="50px",e.style.width="50px"):(e.style.opacity="0",e.style.height="0px",e.style.width="0px")}),e.addEventListener("click",function(){$("body,html").animate({scrollTop:0},800)})}(),jQuery(document).ready(function(){jQuery(".intro__article").addClass("hidden").viewportChecker({classToAdd:"visible animated bounceInRight",offset:200}),jQuery(".cases__title").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:200}),jQuery(".cases__article").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:300}),jQuery(".cases__items-item").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:300}),jQuery(".gallery__article").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:300}),jQuery(".price__title").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:300}),jQuery(".price__article").addClass("hidden").viewportChecker({classToAdd:"visible animated fadeIn",offset:300}),jQuery(".price__container").addClass("hidden").viewportChecker({classToAdd:"visible animated bounceInLeft",offset:300})});