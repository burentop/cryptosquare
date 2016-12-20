var encryptMessage = function(message) {
  return message.replace(/[ .,?!;:]/g, '').toLowerCase();
}

$(document).ready(function() {
  $("form#encryption").submit(function(event) {
    event.preventDefault();
    var message = $("#message").val();
    var encryption = encryptMessage(message);
    $("#output-original").text(message);
    $("#output-encrypted").text(encryption);
    $("#result").show();
  });
});
