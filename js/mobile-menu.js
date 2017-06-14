
//открывание меню по клику на кнопке
var menuOpened = false;

$("#mobile-menu-btn").click(function() {
  if ((menuOpened) && ($(window).width()<980)) {
    $("#main-nav").removeClass("opened");
    $("#mobile-menu-btn").removeClass("main-nav__mobile-menu-btn--close");
    $("#sidebar").show();
    $("#content").show();
    $('#footer-social-links').show();
    menuOpened = false;
  } else {

    $("#main-nav").addClass("opened");
    $("#mobile-menu-btn").addClass("main-nav__mobile-menu-btn--close");
    $("#sidebar").hide();
    $('#footer-social-links').hide();
    $("#content").hide();
    menuOpened = true;
  }
});


//открывание разделов подменю



$(".mobile-menu-link").click(function() {
  if ($(window).width()<980){
    $(this).hide();
    $(this).siblings().show();
    $(this).parent().siblings().hide();
}

});

//возврат по кнопке "назад"


$(".sub-menu__link--back").click(function(){
  if ($(window).width()<980){
  $(this).parent().parent().hide(); //скрываем подменю
  $(this).parent().parent().parent().children().first().show(); //показываем ссылку на родительский раздел
  $(this).parent().parent().parent().siblings().show();//и остальные разделы этого уровня
}
});
