
function neighbor(number, callback) {
  let output = [];
  for (let i = 0; i <= number; i++) {
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
function process() {
  const number = parseInt(document.getElementById('numberInput').value);
  const result = neighbor(number, list);
  document.getElementById('result').innerHTML = result.join(', ');
}