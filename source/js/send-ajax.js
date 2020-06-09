$(function () {
  var ESC_KEYCODE = 27;
  var modalBg = document.querySelector('.modal-background');
  var modalForm = document.querySelector('#modal-form');
  var successMessage = document.querySelector('#success-box');
  var errorMessage = document.querySelector('#error-box');
  var closeBtnSucces = document.querySelector('#succes-close-btn');
  var closeBtnError = document.querySelector('#error-close-btn');
  var closeBtn = document.querySelector('#form-close-btn');
  var modalFormBtn = document.querySelector('#recall-btn');
  var loader = document.querySelector('.load');
  var userMessage = document.querySelector('#modal-form-usermessage');


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
      closeForm();
    }
  };

  var closeIffield = function (evt) {
    if (evt.target === modalBg) {
      closeSucces();
      closeForm();
    }
  };

  var openForm = function () {
    popup.classList.add('modal-content-show');
    modalBg.style.display = 'block';
    document.addEventListener('keydown', onEscPress);
    document.addEventListener('mouseup', closeIffield);
  }

  var closeForm = function () {
    popup.classList.add('modal-content-hide');
    modalBg.style.display = 'none';
    document.removeEventListener('keydown', onEscPress);
    document.removeEventListener('mouseup', closeIffield);
    setTimeout(function () {
      popup.classList.remove('modal-content-show');

      popup.classList.remove('modal-content-hide');
    }, 250);
  };

  closeBtnSucces.addEventListener('click', closeSucces);
  closeBtnError.addEventListener('click', closeSucces);
  modalFormBtn.addEventListener('click', openForm);
  closeBtn.addEventListener('click', closeForm);


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

  $('#modal-form').submit(function (e) {
    e.preventDefault();
    var formdata = 'name=' + $('#modal-name').val() + '&phone=' + $('#modal-phone').val();
    //запишем все данные формы в переменную data
    $.ajax({
      url: 'send.php',
      data: formdata,
      type: 'post',
      success: function (respond) {
        loader.style.display = 'block';
        setTimeout(function () {
          loader.style.display = 'none';
        }, 800);
        setTimeout(function () {
          userMessage.innerText = 'Ваша заявка принята! Мы свяжемся с вами в течении 15 минут!';
        }, 800);
        setTimeout(function () {
          userMessage.innerText = ' ';
          modalForm.reset();
        }, 8000);
      },
      error: function () {
        loader.style.display = 'block';
        setTimeout(function () {
          loader.style.display = 'none';
        }, 800);
        setTimeout(function () {
          userMessage.innerText = 'Что-то пошло не так, повторите попытку позже.';
        }, 800);
        setTimeout(function () {
          userMessage.innerText = ' ';
          modalForm.reset();
        }, 8000);
      }
    });
  });
});
