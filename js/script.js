$(document).ready(function() {
  $('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.lightbox').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  infinite: false
});

$("#menuToggle").click(function() {
  $(".block_1").toggleClass('burger__dispaly');
});

$('body').append('<a href="#" id="popup__toggle" onclick="return false;"><div class="circlephone" style="transform-origin: center;"></div><div class="circle-fill" style="transform-origin: center;"></div><div class="img-circle" style="transform-origin: center;"><div class="img-circleblock" style="transform-origin: center;"></div></div></a>');

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
   else $(scrollDiv).fadeIn("slow");
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow");
  });
 };
});

$(function() {
 $("#popup__toggle").scrollToTop();
});
});

document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.mause');
    document.addEventListener('mousemove', function (e) {
    cursor.setAttribute('style', 'top: '+(e.pageY -10)+'px; left: '+(e.pageX -10)+'px;');
});
  document.addEventListener('click', function() {
    cursor.classList.add('mause_click');
    setTimeout(function () {
      cursor.classList.remove('mause_click');
    }, 300);
  });
});
