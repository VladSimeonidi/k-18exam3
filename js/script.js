$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');

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
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $("#go-top").scrollToTop();
});