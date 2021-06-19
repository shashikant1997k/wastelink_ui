$(document).ready(function () {
  // AOS.init({ duration: 600 });
  // $(window).on("load", function () {
  //   AOS.refresh();
  // });

  $(".main__container").scroll(function () {
    console.log($(".main__container").scrollTop());
    if ($(".main__container").scrollTop() > 100) {
      console.log("hihih");
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

    let elem = $(".t3");
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() + 90;

    if (elemBottom <= docViewBottom) {
      $(".t3__num").each(function () {
        var $this = $(this),
          countTo = 1008;
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 800,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    } else {
      $(".t3__num").text(1);
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

$(document).ready(function () {
  $(".main__container").snapScroll({
    arrowKeys: true,
    duration: 800,
    easing: "easeInOutCubic",
    scrollBar: true,
    onLeave: function (currentPoint, nextPoint) {
      console.log(
        "Leaving point " + currentPoint + ", going to point " + nextPoint + "."
      );
    },
    onArrive: function (prevPoint, currentPoint) {
      console.log("I've arrived!");
    },
  });
});
