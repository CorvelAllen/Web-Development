"use strict"

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
	bugReady = true;
};
bugImage.src = "images/bug.png";

var bug = {
	speed: 256, 
	x: 0,
	y: 0
};
var bugsCaught = 0;



// Reset the game when the player catches a monster
var reset = function () {
	bug.x = canvas.width / 2;
	bug.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	bug.x = 32 + (Math.random() * (canvas.width - 64));
	bug.y = 32 + (Math.random() * (canvas.height - 64));
};


var render = function () {
	if (bgReady) {
		context.drawImage(bgImage, 0, 0);
	}

	if (bugReady) {
		context.drawImage(heroImage, bug.x, bug.y);
	}
}





var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();