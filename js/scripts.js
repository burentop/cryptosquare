var square = 1;
var arrays = [];

var findSquare = function(message) {
  if (square * square < message.length) {
    square += 1;
    findSquare(message);
  }
  return square;
}

var makeArrays = function(message, squareSize) {
  for (var index = 0; index < squareSize; index += 1) {
    arrays[index] = "";
    for (var index2 = index; index2 < message.length; index2 += squareSize) {
      arrays[index] += message[index2];
    }
  }
  return arrays;
}

var encryptMessage = function(message) {
  var noPunctuation = message.replace(/[ .,?!;:]/g, '').toLowerCase();
  squareSize = findSquare(noPunctuation);
  return makeArrays(noPunctuation, squareSize);
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
