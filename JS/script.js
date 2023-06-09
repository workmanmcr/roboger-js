function returnBeep(number) {
  if (number.toString().includes('1')) {
    return "beep";
  }
  return number;
}
function returnBoop(number) {
  if (number === 2) {
    return "boop";
  }
  return number;
}