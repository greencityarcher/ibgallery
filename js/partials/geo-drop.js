var geoOpened = false;

$(".geolocation__current").click(function(e) {
  e.stopPropagation();
  if (!geoOpened) {
    showDrop(".geolocation__picker-wrap");
    $(".overlay").addClass("overlay--soft");
    $(".overlay").show();
    geoOpened = true;
  }
  else{
    hideDrop(".geolocation__picker-wrap");
    geoOpened = false;
    $(".overlay").hide();
    $(".overlay").removeClass("overlay--soft");

  }
});


$(".geolocation__picker-wrap").click(function(e){
  e.stopPropagation();

});

$(document).click(function(e) {
  if (geoOpened) {
    hideDrop(".geolocation__picker-wrap");
    geoOpened = false;
    $(".overlay").hide();
    $(".overlay").removeClass("overlay--soft");
  }
});



function showDrop(id) {
  $(id).slideDown();
}

function hideDrop(id) {
  $(id).slideUp();
}
