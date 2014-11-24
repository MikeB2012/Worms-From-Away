'use strict';

var socket;

/**
 * Create a socket connection and a canvas and
 * a listener for a 'mouse' event
 */
function setup() {
	socket = io.connect('http://localhost');
	var wormCanvas = createCanvas(500,500);
	wormCanvas.parent('worms');
	socket.on('mouse', drawColouredCircle);
}
 /**
  * Draws in the canvas ... or so I thought.
  * Doesn't seem to be needed.
  */
function draw() {
	mouseDragged;
}
 /**
  * When the mouse is dragged, it draws red circles
  * locally, and transmits the mouse movement to the
  * server.
  */
function mouseDragged() {
  var data = {
    x: mouseX,
    y: mouseY
  };
  fill(255,0,0);
	noStroke();
	ellipse(data.x,data.y,40,40);
  console.log('moused dragged');
  socket.emit('mouse',data);
}

/**
 * When the server emits a 'mouse event', this
 * function is called for drawing the circles locally.
 * @param  {object} data 'x' and 'y' coords of
 *                       the mouse
 * @return {object}      an ellipse
 */
function drawColouredCircle (data) {
		console.log("coloured circle");
		var cR = Math.round(Math.random()*255),
				cG = Math.round(Math.random()*255),
				cB = Math.round(Math.random()*255)
		fill(cR, cG, cB);
		noStroke();
		ellipse(data.x,data.y,80,80);
	}
