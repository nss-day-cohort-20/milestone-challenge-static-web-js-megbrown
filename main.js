
var pineTreeObject = {};
var button = document.getElementById("submit");
var inputEnterHeight = document.getElementById("height-area");
var inputEnterChar = document.getElementById("character-area");

button.addEventListener("click", makeTreeObject);

inputEnterHeight.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		makeTreeObject();
	}
});

inputEnterChar.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		makeTreeObject();
	}
});

function makeTreeObject(clickEvent) {
	pineTreeObject.height = document.getElementById("height-area").value;
	pineTreeObject.char = document.getElementById("character-area").value;
	buildTree(pineTreeObject);
}

function buildTree(pineTreeObject) {
	var spaceNum = pineTreeObject.height;
	var charNum = -1;
	if (inputEnterHeight.value !== "" && inputEnterChar.value !== "") {
		for(i = 0; i < pineTreeObject.height; i++) {
			spaceNum -= 1;
			charNum += 2;
			var spaces = " ".repeat(spaceNum);
			var chars = pineTreeObject.char.repeat(charNum);
			var pineTree = spaces + chars + spaces;
			console.log(pineTree);
		}
	} else {
		alert("Both fields must have a value.");
	}
}