//осветление страницы при выпадающем меню

function fadeContent() {
  if (($(window).width() > MAXMOBILEWIDTH)) {
    $("#header-overlay").show();
  }
}

function unFadeContent(){
  if (($(window).width() > MAXMOBILEWIDTH)) {
    $("#header-overlay").hide();
  }
}


$(".main-menu__item").hover(
  function() {
    if (($(window).width() > MAXMOBILEWIDTH) && (!($(this).hasClass("main-menu__item--no-sub")))) {
      fadeContent();
    }
  },
  function() {
    if ($(window).width() > MAXMOBILEWIDTH) {
      unFadeContent();
    }
  }
);
