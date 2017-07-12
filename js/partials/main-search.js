$("#main-search-toggle").click(function() {
  if ($("#main-search").hasClass("opened")) {
  closeSearch();
  }
  else {
  openSearch();
  }
});


function openSearch(){
    $("#main-search").addClass("opened");
    searchOpened=true;
    if ($(window).width() <= MAXMOBILEWIDTH) {
      $("#main-nav").slideUp();
    }
}

function closeSearch(){
  $("#main-search").removeClass("opened");
  searchOpened=false;
  if ($(window).width() <= MAXMOBILEWIDTH) {
    $("#main-nav").slideDown();
  }
}


//возврат по кнопке Назад
$(document).on('click', "#back-from-search", function() {
  $("#main-search").removeClass("opened");
  $("#main-nav").slideDown();
});


//поисковые подсказки показываются, когда фокус переходит в строку поиска
$("#search-query-input").focusin(function() {
  $("#search-hint").slideDown();
});

$("#search-query-input").focusout(function() {
  $("#search-hint").slideUp();
});
