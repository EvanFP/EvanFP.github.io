console.log ("Testing console output");
var myHeading = document.getElementById("HelloHeading");

function createAndAddDBZ () {
	var dbzImage = document.createElement("img");
	dbzImage.src = "giphy.gif";
	myHeading.appendChild(dbzImage)
}

myHeading.onclick = function () {
	createAndAddDBZ()
};