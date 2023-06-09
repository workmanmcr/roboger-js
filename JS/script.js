
function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
} else if (number.toString().includes('1')) {
  return "beep";   
  return number;
}
}

function list(number) {
  var numbers = [];
  for (var i = 0; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}
