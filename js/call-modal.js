//Ссылка на страницу с заказом звонка недоступна при включенном js
$("document").ready(function(){
  $(".call-request__popup-link").removeAttr("href");
})


$(".call-request__popup-link").click(function(){

  $(".call-modal").show();
  $(".overlay").show();
});

$(".call-modal__close").click(function(){
  $(".call-modal").hide();
  $(".overlay").hide();
})
