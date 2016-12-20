var square = 1;
var arrays = [];
var encryption = "";

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

var assembleArrays = function() {
  for (var index = 0; index < arrays.length; index += 1) {
    for (var index2 = 0; index2 < arrays[index].length; index2 += 1) {
      encryption += arrays[index][index2];
      if (encryption.replace(/[ ]/g, '').length % 5 === 0) {
        encryption += " ";
      }
    }
  }
}

var encryptMessage = function(message) {
  var noPunctuation = message.replace(/[ .,?!;:]/g, '').toLowerCase();
  squareSize = findSquare(noPunctuation);
  makeArrays(noPunctuation, squareSize);
  assembleArrays();
  return encryption;
}

$(document).ready(function() {
  $("form#encryption").submit(function(event) {
    event.preventDefault();
    var message = $("#message").val();
    encryption = encryptMessage(message);
    $("#output-original").text(message);
    $("#output-encrypted").text(encryption);
    $("#result").show();
  });
});
