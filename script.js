let rosiePercent = 0.37;
let andrewPercent = 0.63;
var rosieCut
var andrewCut

document.getElementById("submit").onclick = getValue;

function getValue() {
  let value = document.getElementById("amount").value;
  rosieCut = value * rosiePercent;
  andrewCut = value * andrewPercent;
  document.getElementById("andrew").innerHTML = "<p>Andrew to pay £" + andrewCut.toFixed(2) +"</p>";
  document.getElementById("rosie").innerHTML = "<p>Rosie to pay £" + rosieCut.toFixed(2) + "</p>";
}


