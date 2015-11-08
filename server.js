var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var RoutingContext = Router.RoutingContext;
var routes = require('./app/routes');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.png'));

app.use(function(req, res) {
	Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {
		if (err) {

			res.status(500).send(err.message);
		} else if (redirectLocation) {

			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {

			var html = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
			var page = swig.renderFile('views/index.html', { html: html });
			res.status(200).send(page);
		} else {

			res.status(404).send('Page Not Found');
		}
	});
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;


io.sockets.on('connection', function(socket) {
	onlineUsers++;

	io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

	socket.on('disconnect', function() {
		onlineUsers--;
		io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
	});
});

server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});