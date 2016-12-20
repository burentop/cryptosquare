var output = "";

var numberMap = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

var findBiggest = function(number) {
  var keys = Object.keys(numberMap);
  for (var index = keys.length - 1; index >= 0; index -= 1) {
    if (number / keys[index] >= 1) {
      return keys[index];
    }
  }
  return biggest;
}

var convertNumber = function(number) {
  var workingNumber = number;
  if (numberMap[workingNumber]) {
    output += numberMap[workingNumber];
  } else if (workingNumber > 4) {
    var large = findBiggest(workingNumber);
    console.log(large);
    var icount = workingNumber % large;
    if (icount > 3) {
      output += numberMap[large];
      workingNumber = workingNumber - large;
      convertNumber(workingNumber);
    } else {
      output += numberMap[large] + "I".repeat(workingNumber % large);
    }
  } else {
    output += "I".repeat(workingNumber);
  }
  return output;
}

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = convertNumber(number);
    $("#output-original").text(number);
    $("#output-roman").text(result);
    $("#result").show();
  });
});
