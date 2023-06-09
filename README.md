Describe: returnBeep()

Test: "it should replace the number 1 with the word beep"
Code: function convertToBeep(number) {
  if (number === 1) {
    return "beep";
returnBeep(1);
Expected Output: beep
passed

Test: "it should replace any number with 1 in it with the word beep"
Code:function returnBeep(number) {
  if (number.toString().includes('1')) {
    return "beep";
returnBeep(716);
Expected Output: beep
passsed 

Describe: returnBoop()
Test: "it should replace the number 2 with the word boop"
code: function returnBoop(number) {
  if (number === 2) {
    return "boop";
returnBoop(2)
Expected Output: boop 
passed
Test: "it should replace any number with 2 in it with the word boop"
code: function returnBoop(number) {
  if (number.toString().includes('2')) {
    return "boop";
 
returnBoop(526)
Expected Output: boop
passed 


Describe: neighbor()
Test: "it should replace the number 3 with the phrase "won't you be my neighbor?" "
code: function neighbor(number) {
  if (number === 3) {
 
neighbor(3)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should replace any number with  3 in it with the phrase "won't you be my neighbor?" "
code: function neighbor(number) {
  if (number.toString().includes('3')) {
 
neighbor(537)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should replace 3 with "won't you be my neighbor?" and pick 3 over 2 "
code: function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
 
neighbor(23)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should select the highest number and return the promt from said highest number"
code: function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
} else if (number.toString().includes('1')) {
  return "beep"; 
 
neighbor(213)
Expected Output: "won't you be my neighbor?"
passed