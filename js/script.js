$(document).ready(function () {
  $('.clients-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.clients-slider-dots'),
    infinite: false,
    appendArrows: $('.client-slider-nav'),
    nextArrow: '<button type="button" class="slick-nav slick-next"><img src="./img/clients/next.png" alt=""></button>',
    prevArrow: '<button type="button" class="slick-nav  slick-prev"><img src="./img/clients/prev.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  });
  $(".accordeon-item-title").click(function () {
    var acc_body = $(this).parent(".accordeon-item").find('.accordeon-item-body');
    var acc_toggler = $(this).parent(".accordeon-item").find('span');
    if (acc_toggler.html() == "+") {
      acc_toggler.html('-')
    } else {
      acc_toggler.html('+')
    }
    //$('.accordeon-item-body').not($(this).next()).slideUp(400);

    //$('.accordeon-item-title span').not($(this).next()).html('+')

    $(this).next().slideToggle(400);
  })
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header-wrap').find('nav').toggleClass('active');
    $('.header-wrap').css('overflow', 'visible')

  });
  $('.menu-burger__header_close').click(function () {
    $('.header-wrap').find('nav').toggleClass('active');
    $('.header-wrap').css('overflow', 'hidden')
  });
  $("#totop").click(function function_name(argument) {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  })
  if ($(window).scrollTop() >= 150) {
    $('#totop').fadeIn();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 150) {
      $('#totop').fadeIn();
    } else {
      $('#totop').fadeOut();
    }
  });
});