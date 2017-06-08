var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var reindeerColor = reindeer.length;

for (var i = 0; i < reindeerColor; i++) {
	console.log(`${reindeer[i]} ${colors[i]}`  );

	//document.write(`${reindeer[i]} ${colors[i]}`);

	var currentReindeer = reindeer[i];
	var currentColor = colors[i];

	hohoho(reindeerColor, currentColor)

}

function hohoho(reindeerColor, currentColor) {
	var hohohoElement = document.getElementById("reindeer");
	var hohohoElementDiv = document.createElement("div");
	var	hohohoElementNode = document.createTextNode(currentReindeer);


	var hoElement = document.getElementById("reindeer");
	var hoElementDiv = document.createElement("div");
	var hoElementNode = document.createTextNode(currentColor);

	hohohoElementDiv.appendChild(hohohoElementNode);
	hohohoElement.appendChild(hohohoElementDiv);

	hoElementDiv.appendChild(hoElementNode);
	hohohoElement.appendChild(hoElementDiv);

}


































