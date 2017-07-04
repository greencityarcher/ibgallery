$(document).ready(function() {
  $.getJSON("data.json", function(json) {
    var userId = json["user-id"];
    if (userId !== undefined) {
      setId(userId);
    } else {
      hideIdBlocks();
    }
  })
});

function setId(id) {
  var elementsArr = $(".user-id");
  elementsArr.each(function() {
    $(this).text("Ваш ID: " + id);
  });
}

function hideIdBlocks() {
  var elementsArr = $(".user-id");
  elementsArr.each(function() {
    $(this).hide();
  });
}
