//осветление страницы при выпадающем меню

$(".main-menu__item").hover(
  function() {
    if ( ($(window).width() >MAXMOBILEWIDTH) && ( !($(this).hasClass("main-menu__item--no-sub"))))  {
      if (!($(this).hasClass("main-menu__item--catalog"))) {
        $(".catalog-menu").css({
          opacity: 0.65
        });
      }
      $(".grid__main-wrapper").css({
        opacity: 0.65
      });
    }
  },
  function() {
    if ($(window).width() >MAXMOBILEWIDTH) {
      if (!($(this).hasClass("main-menu__item--catalog"))) {
        $(".catalog-menu").css({
          opacity: 1
        });
      }

      $(".grid__main-wrapper").css({
        opacity: 1
      });
    }
  }
);
