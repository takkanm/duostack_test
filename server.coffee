# require 'express'
app = require('express').createServer
app.get('/', (req, res) -> {
	res.send('hi! hi! hi!')
})

app.listen(8124, '127.0.0.1')
