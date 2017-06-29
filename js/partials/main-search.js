var searchActive = false;
$("#main-search-toggle").removeAttr("href");
$("#main-search").prepend('<a id="back-from-search">Назад</a>');

$("#main-search-toggle").click(function() {

      if (searchActive) {
        $("#main-search").removeClass("opened");
        searchActive = false;
        if ($(window).width() <= MAXMOBILEWIDTH) {
            $("#main-nav").show();
          }
        }
        else {
          $("#main-search").addClass("opened");
          searchActive = true;
          if ($(window).width() <= MAXMOBILEWIDTH) {
              $("#main-nav").hide();
            }
        }
      });


    //возврат по кнопке Назад
    $("#back-from-search").click(function() {
      $("#main-search").removeClass("opened");
      searchActive = false;
      $("#main-search").show();
      console.log("search closed and visible");
      $("#main-nav").show();
    });



    //поисковые подсказки показываются, когда фокус переходит в строку поиска

    $("#search-query-input").focusin(function() {
      $("#search-hint").show();
    });

    $("#search-query-input").focusout(function() {
      $("#search-hint").hide();
    })


    //в десктопной версии поиск всегда показывается
    $(window).resize(function() {
      if ($(window).width() > MAXMOBILEWIDTH) {
        $("#main-search").removeAttr("style");
      }
    });
