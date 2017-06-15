
var MAXMOBILEWIDTH=980;

var menuOpened = false;


function openMenu(){
  $("#main-nav").addClass("opened");
  $("#mobile-menu-btn").addClass("main-nav__mobile-menu-btn--close");
  $("#sidebar").hide();
  $('#footer-social-links').hide();
  $("#content").hide();
}

function closeMenu(){
  $("#main-nav").removeClass("opened");
  $("#mobile-menu-btn").removeClass("main-nav__mobile-menu-btn--close");
  $("#sidebar").show();
  $("#content").show();
  $('#footer-social-links').show();
}


//очистка инлайновых стилей, оставшихся после работы мобильного меню
function clearInlineStyles(){
  children=$(".main-menu [style]").each(function(){
    $(this).removeAttr("style");
    console.log($(this));
});

}


//открывание-закрывание меню по клику на бургер

$("#mobile-menu-btn").click(function() {
  if ((menuOpened) && ($(window).width()<MAXMOBILEWIDTH)) {
    closeMenu();
    menuOpened = false;
  }
  else {
    openMenu();
    menuOpened = true;
  }
});


//открывание разделов подменю

$(".mobile-menu-link").click(function() {
  if ($(window).width()<MAXMOBILEWIDTH){
    $(this).hide();
    $(this).siblings().show();
    $(this).parent().siblings().hide();
}

});

//возврат по кнопке "назад"


$(".sub-menu__link--back").click(function(){
  if ($(window).width()<MAXMOBILEWIDTH){
      $(this).parent().parent().hide(); //скрываем подменю
      $(this).parent().parent().parent().children().first().show(); //показываем ссылку на родительский раздел
      $(this).parent().parent().parent().siblings(":not(.wide-only)").show();//и остальные разделы этого уровня, если они не помечены как только для широкой версии
    }
});


//отслеживание ширины окна для предотвращения пропадания контента
$(window).resize(function(){
    if (($(window).width()>=MAXMOBILEWIDTH)&&menuOpened){
      closeMenu();
      menuOpened=false;
      clearInlineStyles();
    }
});
