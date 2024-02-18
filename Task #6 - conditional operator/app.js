let  userInput = prompt("Введите число:");

if (!isNaN(userInput)) {

  let number = parseFloat(userInput);
  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }
} else {
  alert("Error");
}
