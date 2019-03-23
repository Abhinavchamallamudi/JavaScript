function displayKeycode(event) {
  var x = event.which || event.keyCode;
  document.getElementById("display").innerHTML = "The Unicode value is: " + x;
}

function clearButton(keyPress) {
  document.getElementById("keyPress").value = "";
}
