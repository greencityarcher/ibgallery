

var searchActive = false;
$("#header-search-toggle").removeAttr("href");
$("#header-search-toggle").click(function() {

  if (searchActive) {
    $("#header-search").removeClass("opened");
    searchActive = false;
  } else {
    $("#header-search").addClass("opened");
    searchActive = true;
  }

});







//поисковые подсказки показываются, когда фокус переходит в строку поиска

$("#search-query-input").focusin(function(){
  $("#search-hint").show();
});

$("#search-query-input").focusout(function(){
  $("#search-hint").hide();
})
