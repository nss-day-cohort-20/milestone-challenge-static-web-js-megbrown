var pineTreeObject = {
	height: 20,//document.getElementById("height-area").value,
	char: "*" //document.getElementById("char-area").value
}
console.log(pineTreeObject)

// var button = document.getElementById("submit");

// button.addEventListener("click", heightGet());


function buildTree(pineTreeObject) {
	for(i=0; i<pineTreeObject.height; i++) {
		var spaceNum = pineTreeObject.height--;
		var charNum = i++;
		var spaces = " ".repeat(spaceNum);
		var chars = pineTreeObject.char.repeat(charNum);
		var pineTree = spaces + chars + spaces;
		console.log(pineTree);
	}
}
buildTree(pineTreeObject);


















