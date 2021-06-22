$(document).ready(function () {
  AOS.init({ duration: 600 });
  $(window).on("load", function () {
    AOS.refresh();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".header").addClass("header__scroll__col");
      $(".header ul li a").css("color", "#fff");
      $(".header .menu-icon .navicon").addClass("navicon_white");
      $(".header__logo").attr("src", "assets/image/w_logo.svg");
    } else {
      $(".header__logo").attr("src", "assets/image/page1/w_logo1.svg");
      if (!$(".menu-btn").is(":checked")) {
        $(".header").removeClass("header__scroll__col");
        $(".header ul li a").css("color", "#000");
        $(".header .menu-icon .navicon").removeClass("navicon_white");
      }
    }
  });

  $(".main__con1 .link").click(function () {
    $(".link").removeClass("link__active");
    $(this).addClass("link__active");
  });

  $(".main__con2 .link1").click(function () {
    $(".link1").removeClass("link1__active");
    $(this).addClass("link1__active");
  });

  $(".menu-btn").click(function () {
    if ($(".menu-btn").is(":checked")) {
      $(".header").addClass("header__scroll__col");
      $(".header .menu-icon .navicon").addClass("navicon_white");
    } else {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() <= 100) {
        console.log("hihiiih");
        $(".header").removeClass("header__scroll__col");
        $(".header .menu-icon .navicon").removeClass("navicon_white");
      }
    }
  });
});
