'use strict';

/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, http = require('http')
	, path = require('path');


var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), serverGreeting);

var io = require('socket.io').listen(server);

/**Register a callback function to run when we have an individual connection
 * This is run for each individual user that connects
 */
io.sockets.on('connection', socketNotice);

/**
 * Callback function for the establishment of a socket.
 * Retransmits rx'ed mouse coordinates to all sockets.
 * @param  {object} socket A socket
 */
function socketNotice(socket) {
		console.log("We have a new client: " + socket.id);
		socket.on('mouse', function mouseDragEvent(data) {
				console.log("received: 'mouse' " + data.x + ", " + data.y);
				socket.broadcast.emit('mouse', data);
		});
	}
 /**
  * Callback function for the creation of the server.
  * @return {[type]} [description]
  */
function serverGreeting() {
	console.log("Express server listening on port " + app.get('port'));
}
