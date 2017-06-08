var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var reindeerColor = reindeer.length;

for (var i = 0; i < reindeerColor; i++) {
	console.log(`${reindeer[i]} ${colors[i]}`  );

	// document.write(`${reindeer[i]} ${colors[i]}`);

	var currentReindeer = reindeer[i];
	var currentColor = colors[i];

	hohoho(reindeerColor, currentColor);

}

function hohoho(reindeerColor) {
	var divElement = document.getElementById("reindeer");
	var pElement = document.createElement("p");
	var	reindeerElementNode = document.createTextNode(currentReindeer);
	var colorElementNode = document.createTextNode(currentColor);
	var spaceElement = document.createTextNode(" ");

	pElement.appendChild(colorElementNode);
	pElement.appendChild(spaceElement);
	pElement.appendChild(reindeerElementNode);
	divElement.appendChild(pElement);

}


































