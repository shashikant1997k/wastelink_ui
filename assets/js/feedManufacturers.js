$(document).ready(function () {
  AOS.init({ duration: 600 });
  $(window).on("load", function () {
    AOS.refresh();
  });

  $(".con2-slide-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".con2-slide",
  });
  $(".con2-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".con2-slide-for",
    autoplay: true,
    dots: true,
    focusOnSelect: true,
  });
});
