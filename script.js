// document.getElementById("submit").onclick = getValue;

function getValue() {
	let rosiePercent = document.getElementById("rosiePercent").value / 100;
	let andrewPercent = document.getElementById("andrewPercent").value / 100;
	var rosieCut;
	var andrewCut;
	let value = document.getElementById("amount").value;
	rosieCut = value * rosiePercent;
	andrewCut = value * andrewPercent;
	document.getElementById("andrew").innerHTML =
		"<p>Andrew to pay £" + andrewCut.toFixed(2) + "</p>";
	document.getElementById("rosie").innerHTML =
		"<p>Rosie to pay £" + rosieCut.toFixed(2) + "</p>";
}
