
function neighbor(number, callback) {
  var output = [];
  for (var i = 0; i <= number; i++) {
    if (i.toString().includes('3')) {
      output.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      output.push("boop");
    } else if (i.toString().includes('1')) {
      output.push("beep");
    } else {
      output.push(i);
    }
  }
  if (typeof callback === 'function') {
    return callback(output);
  }

  return output;
}

function list(numbers) {
  return numbers;
}