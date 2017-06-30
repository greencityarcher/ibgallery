$(document).ready(function(){

  $.getJSON("data.txt", function(json){
    shopCount=json["shopping-count"];
    likedCount=json["liked-count"];
    setCounter(".featured__link--shopping-card", shopCount);
    setCounter(".featured__link--liked", likedCount);
  })
  

});



function setCounter(selector, data){
console.log(selector);
  if (data>0){

    if(!($(selector).hasClass("featured__link--counting"))){
      $(selector).addClass("featured__link--counting");

    }
    $(selector).attr('data-count', data);
  }
  else{
    if ($(selector).hasClass("featured__link--counting")){
      $(selector).removeClass("featured__link--counting");
    }
  }
}
