var MAXMOBILEWIDTH=980;

//= partials/jquery-3.2.1.js
//= partials/main-search.js
//= partials/mobile-menu.js
//= partials/fading-content.js
//= partials/call-modal.js
//= partials/counters.js
//= partials/user-id.js
//= partials/geo-drop.js



var menuOpened = false;
$("#main-search").prepend('<a id="back-from-search">Назад</a>');
//ко всем спискам добавляется кнопка назад
$(".main-menu ul").prepend('<li class="link-back">Назад</li>');
$(".main-menu>li>ul>li:first-child").addClass("link-back--to-first-lvl");

$(document).ready(function(){
  $("#main-search-toggle").removeAttr("href");
});




//отслеживание ширины окна для предотвращения пропадания контента
$(window).resize(function() {
  if (($(window).width() > MAXMOBILEWIDTH) && menuOpened) {

    closeMenu();

    clearInlineStyles();

    if ($(window).width() > MAXMOBILEWIDTH) {
      $("#main-search").removeClass("opened");
    }
  }
});
