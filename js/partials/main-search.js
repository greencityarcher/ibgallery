$("#main-search-toggle").click(function() {
  if ($("#main-search").hasClass("opened")) {
    $("#main-search").removeClass("opened");
    console.log("search closed");
    if ($(window).width() <= MAXMOBILEWIDTH) {
      $("#main-nav").show();
    }
  } else {
    $("#main-search").addClass("opened");

    console.log("search active");
    if ($(window).width() <= MAXMOBILEWIDTH) {
      $("#main-nav").hide();
    }
  }
});


//возврат по кнопке Назад
$(document).on('click', "#back-from-search", function() {
  console.log("search closed and visible");
  $("#main-search").removeClass("opened");
  $("#main-nav").show();
});


//поисковые подсказки показываются, когда фокус переходит в строку поиска

$("#search-query-input").focusin(function() {
  $("#search-hint").show();
});

$("#search-query-input").focusout(function() {
  $("#search-hint").hide();
});
