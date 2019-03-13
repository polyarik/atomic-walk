document.oncontextmenu = function () {return false};
document.ondragstart = function() {return false};


function main() {
	console.log("start");

	const heroCanvasId = "hero-canvas";
	const fieldCanvasId = "field-canvas";

	let game = new Game(heroCanvasId, fieldCanvasId);
}