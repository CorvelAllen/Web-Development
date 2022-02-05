var canvas = document.createElement("canvas"),
canvasLeft = canvas.offsetLeft + canvas.clientLeft,
canvasTop = canvas.offsetTop + canvas.clientTop;
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background1.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/bug1.png";
var hero = {
	speed: 256 
};

var herosCaught = 0;
const initialSpeed = 3000
let interval = initialSpeed

setInterval(() => {
	hero.x = (Math.random() * (canvas.width - 64));
	hero.y = (Math.random() * (canvas.height - 64));
}, interval);

function ResetSpeed(){
	 interval = initialSpeed;

}

function ResetScore(){
	herosCaught = 0;
	interval = initialSpeed;
}
window.onload = createEventListeners()

function createEventListeners(){
    var resetButton = document.getElementById("resetbtn");
    var resetSpeed = document.getElementById("speedbtn");
    if(resetButton.addEventListener){
        resetButton.addEventListener("click", ResetScore, false);
	}
	else if (resetButton.attachEvent){
		resetButton.attachEvent("onclick", ResetScore);
	}
     if(resetSpeed.addEventListener){
		resetSpeed.addEventListener("click", ResetSpeed, false);
	}
	else if(resetSpeed.attachEvent){
		resetSpeed.attachEvent("onclick",ResetSpeed);
	}
}

canvas.addEventListener('click', (event) => {
	const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
	console.log("click", x, y)
	console.log("bug", hero.x, hero.y)
	let click = {
		xCoord : x,
		yCoord : y
	}
	if (Math.abs(click.yCoord - hero.y)  <= 25 || Math.abs(click.xCoord - hero.x) <= 25){
		update()
	}
	
}, false)

var reset = function () {
	hero.x = 32 + (Math.random() * (canvas.width - 64));
	hero.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (){
	
		++herosCaught;
		interval = interval - 1000
		reset();
	
}
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Bugs caught: " + herosCaught, 32, 32);
};


var main = function () {
	var now = Date.now();
	var delta = now - then;
	render();

	then = now;
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();