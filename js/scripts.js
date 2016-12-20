

$(document).ready(function() {
  $("form#encryption").submit(function(event) {
    event.preventDefault();
    var message = $("#number").val();
    var encryption = encryptMessage(message);
    $("#output-original").text(message);
    $("#output-encryption").text(encryption);
    $("#result").show();
  });
});
