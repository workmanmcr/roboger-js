function returnBeep(number) {
  if (number.toString().includes('1')) {
    return "beep";
  }
  return number;
}

function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
  return number;
}
}