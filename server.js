require('./node_modules/coffee-script')
// require('./server.coffee')
var app = require('express').createServer();

app.get('/', function(req, res) {
	res.render('index.ejs')
});

app.listen(8124);
