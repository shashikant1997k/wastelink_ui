$(document).ready(function () {
  AOS.init({ duration: 600 });
  $(window).on("load", function () {
    AOS.refresh();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".header").addClass("header__scroll__col");
      $(".header__logo").attr("src", "assets/image/w_logo.svg");
    } else {
      $(".header__logo").attr("src", "assets/image/page1/w_logo1.svg");
      if (window.matchMedia("(max-width: 767px)").matches) {
        if (!$(".menu-btn").is(":checked")) {
          $(".header").removeClass("header__scroll__col");
        }
      } else {
        $(".header").removeClass("header__scroll__col");
      }
    }
  });

  $(".menu-btn").click(function () {
    if ($(".menu-btn").is(":checked")) {
      $(".header").addClass("header__scroll__col");
    } else {
      if ($(window).scrollTop() <= 100) {
        $(".header").removeClass("header__scroll__col");
      }
    }
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
