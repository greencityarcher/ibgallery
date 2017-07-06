var menuOpened = false;

//ко всем спискам добавляется кнопка назад
$(".main-menu ul").prepend('<li class="link-back">Назад</li>');
$(".main-menu>li>ul>li:first-child").addClass("link-back--to-first-lvl");


function openMenu() {
  $("#main-nav").addClass("opened");
  $("#mobile-menu-btn").addClass("main-nav__mobile-menu-btn--close");
  $("#main-search").show();
  $("#sidebar").hide();
  $('#footer-social-links').hide();
  $("#content").hide();
  menuOpened = true;
}

function closeMenu() {
  $("#main-nav").removeClass("opened");
  $("#mobile-menu-btn").removeClass("main-nav__mobile-menu-btn--close");
  $("#main-search").removeClass("opened");
  $("#sidebar").show();
  $("#content").show();
  $('#footer-social-links').show();
  clearInlineStyles();
  menuOpened = false;
}


//очистка инлайновых стилей, оставшихся после работы мобильного меню
function clearInlineStyles() {
  var mElements = $(".main-menu [style]");
  var sElements = $(".search [style]");
  mElements.each(function() {
    $(this).removeAttr("style");
  });
  sElements.each(function() {
    $(this).removeAttr("style");
  });
  $(".search").removeAttr("style");
  $(".main-nav").removeAttr("style");
}


//открывание-закрывание меню по клику на бургер
$("#mobile-menu-btn").click(function() {
  if ((menuOpened) && ($(window).width() < MAXMOBILEWIDTH)) {
    closeMenu();
  } else {
    openMenu();
  }
});


//открывание разделов подменю
$(".mobile-menu-link").click(function() {
  if ($(window).width() < MAXMOBILEWIDTH) {
    $(this).hide();
    $(this).siblings().show();
    $(this).parent().siblings().hide();
    $("#main-search").hide();
  }

});

//возврат по кнопке "назад"
$(".link-back").click(function() {

  $(this).parent().hide(); //скрываем подменю
  $(this).parent().parent().children().first().show(); //показываем ссылку на родительский раздел
  $(this).parent().parent().siblings(":not(.wide-only)").show(); //и остальные разделы этого уровня, если они не помечены как только для широкой версии
});

//показываем поиск на первом уровне

$(".link-back--to-first-lvl").click(function() {
  $("#main-search").show();
});


//отслеживание ширины окна для предотвращения пропадания контента
$(window).resize(function() {
  if (($(window).width() >= MAXMOBILEWIDTH) && menuOpened) {
    console.log(menuOpened);
    closeMenu();
    clearInlineStyles();
    console.log(menuOpened);
  }
});
