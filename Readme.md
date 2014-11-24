Worms From Away
================

This is just some code developed to learn how:

1. Event Emitters work;
2. Listeners work; and
3. sockets work.

To make the learning interesting, the following was attempted:

-  Allow a user to draw with a mouse on a canvas
-  Transmit the mouse movements to other users' canvases.

When a user navigates to localhost: 3000, they are presented with a page on which there is a 500 x 500 canvas.  In the background a socket connection is opened to the server.  When the user drags the mouse across the canvas, a series of circles is drawn in a fixed colour (default: red).  At the same time, the mouse movement is transmitted to the server which emits the movements to all open sockets.  The movement is rendered in random colours on the canvases of all other connected users.

This program uses the Javascript implementation of the Processing language, [p5js](http://p5js.org/), for graphics.
