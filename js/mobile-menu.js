
//открывание меню по клику на кнопке
var menuOpened = false;

$("#mobile-menu-btn").click(function() {
  if ((menuOpened) && ($(window).width()<980)) {
    $("#main-nav").removeClass("opened");
    $("#sidebar").show();
    $("#content").show();
    $('#footer-social-links').show();
    menuOpened = false;
  } else {

    $("#main-nav").addClass("opened");
    $("#sidebar").hide();
    $('#footer-social-links').hide();
    $("#content").hide();
    menuOpened = true;
  }
});


//открывание разделов подменю

if ($(window).width()<980){

$(".main-menu__link").click(function() {
    $(this).hide();
    $(this).siblings().show();
    $(this).parent().siblings().hide();

});
}
else{

}

//возврат по кнопке "назад"

if ($(window).width()<980){
$(".sub-menu__link--back").click(function(){
  $(this).parent().parent().hide(); //скрываем подменю
  $(this).parent().parent().parent().children().first().show(); //показываем ссылку на родительский раздел
  $(this).parent().parent().parent().siblings().show();//и остальные разделы этого уровня

});
}
else{

}
