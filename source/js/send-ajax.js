$(function () {
  var ESC_KEYCODE = 27;
  var modalBg = document.querySelector('.modal-background');
  var successMessage = document.querySelector('#success-box');
  var errorMessage = document.querySelector('#error-box');
  var closeBtnSucces = document.querySelector('#succes-close-btn');
  var closeBtnError = document.querySelector('#error-close-btn');


  var closeSucces = function () {
    errorMessage.classList.add('succes-content-hide');
    successMessage.classList.add('succes-content-hide');
    document.removeEventListener('mouseup', closeIffield);
    document.removeEventListener('keydown', onEscPress);
    setTimeout(function () {
      modalBg.style.display = 'none';
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      errorMessage.classList.remove('succes-content-hide');
      successMessage.classList.remove('succes-content-hide');
    }, 200);
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSucces();
    }
  };

  var closeIffield = function (evt) {
    if (evt.target === modalBg) {
      closeSucces();
    }
  };

  closeBtnSucces.addEventListener('click', closeSucces);
  closeBtnError.addEventListener('click', closeSucces);


  $('#contacts__form').submit(function (e) {
    e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
    var formdata = 'name=' + $('#name').val() + '&phone=' + $('#phone').val() + '&message=' + $('#message').val();
    //запишем все данные формы в переменную data
    $.ajax({
      url: 'send.php',
      data: formdata,
      type: 'post',
      success: function (respond) {
        document.addEventListener('mouseup', closeIffield);
        document.addEventListener('keydown', onEscPress);
        $("#success-box").css('display', 'block') && $(".modal-background").css('display', 'block') && $("#name").val("") && $("#phone").val("") && $("#message").val("");
      },
      error: function () {
        document.addEventListener('mouseup', closeIffield);
        document.addEventListener('keydown', onEscPress);
        $("#error-box").css('display', 'block') && $(".modal-background").css('display', 'block');
      }
    });
  });
});
