var MAXMOBILEWIDTH = 979;

//= partials/jquery-3.2.1.js
//= partials/main-search.js
//= partials/mobile-menu.js
//= partials/fading-content.js
//= partials/call-modal.js
//= partials/counters.js
//= partials/user-id.js
//= partials/geo-drop.js

var menuOpened = false;
var searchOpened = false;
var lastWidth = $(window).width();

$(document).ready(function() {
  //при активном js не происходит переход на отдельную страницу поиска
  $("#main-search-toggle").removeAttr("href");

  $("#main-search").prepend('<a id="back-from-search">Назад</a>');
  //ко всем спискам добавляется кнопка назад
  $(".main-menu ul").prepend('<li class="link-back">Назад</li>');
  $(".main-menu>li>ul>li:first-child").addClass("link-back--to-first-lvl");
});


//отслеживание ширины окна для предотвращения пропадания контента
$(window).resize(function() {
  //если переходм с мобилки на планшет
  if ((lastWidth <= MAXMOBILEWIDTH) && ($(window).width() > MAXMOBILEWIDTH) && menuOpened) {
    closeMenu();
    closeSearch();
    clearInlineStyles();
  }
  //если переходим с планшета или десктопа на мобилку
  if ((lastWidth > MAXMOBILEWIDTH) && ($(window).width() <= MAXMOBILEWIDTH) && searchOpened) {
    closeSearch();
    clearInlineStyles();
  }

  lastWidth = $(window).width();
});
