$(document).ready(function () {
  AOS.init({ duration: 600 });
  $(window).on("load", function () {
    AOS.refresh();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("header__scroll__col");
      $(".header ul li a").css("color", "#ffffff");
    } else {
      $(".header").removeClass("header__scroll__col");
      $(".header ul li a").css("color", "#000000");
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
});
