var square = 1;

var findSquare = function(message) {
  if (square * square < message.length) {
    square += 1;
    findSquare(message);
  }
  return square;
}

var encryptMessage = function(message) {
  var noPunctuation = message.replace(/[ .,?!;:]/g, '').toLowerCase();
  return findSquare(noPunctuation);
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
