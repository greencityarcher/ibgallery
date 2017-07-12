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
$(document).on('click', "#mobile-menu-btn", function() {
  if ((menuOpened) && ($(window).width() < MAXMOBILEWIDTH)) {
    closeMenu();
  } else {
    openMenu();
  }
});


//открывание разделов подменю
$(".mobile-menu-link").click(function() {
  if ($(window).width() <= MAXMOBILEWIDTH) {
    $(this).slideUp();
    $(this).siblings().slideDown();
    $(this).parent().siblings().slideUp();
    $("#main-search").slideUp();
  }

});

//возврат по кнопке "назад"
$(document).on('click', ".link-back", function() {
  $(this).parent().slideUp(); //скрываем подменю
  $(this).parent().parent().children().first().slideDown(); //показываем ссылку на родительский раздел
  $(this).parent().parent().siblings(":not(.wide-only)").slideDown(); //и остальные разделы этого уровня, если они не помечены как только для широкой версии
});

//показываем поиск на первом уровне

$(document).on('click', ".link-back--to-first-lvl", function() {
  $("#main-search").slideDown();
});
