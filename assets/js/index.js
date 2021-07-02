$(document).ready(function () {
  AOS.init({ duration: 1000 });
  $(window).on("load", function () {
    AOS.refresh();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("header__scroll__col");
    } else {
      if (window.matchMedia("(max-width: 767px)").matches) {
        if (!$(".menu-btn").is(":checked")) {
          $(".header").removeClass("header__scroll__col");
        }
      } else {
        $(".header").removeClass("header__scroll__col");
      }
    }
  });

  // slick slider start

  $(".slick-wrap").slick({
    centerMode: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
    ],
  });

  // slick slider end

  $(".menu-btn").click(function () {
    if ($(".menu-btn").is(":checked")) {
      $(".header").addClass("header__scroll__col");
    } else {
      if ($(window).scrollTop() <= 100) {
        $(".header").removeClass("header__scroll__col");
      }
    }
  });
});
