$(document).on(".main-menu__item", "click", function() {
  $(this).children(".sub-menu").slideDown();
  $("#header-overlay").show();
  console.log($(this).children(".sub-menu"));
});
