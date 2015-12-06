/*global require, console*/
var express = require('express');

var app = express();

app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.get('/', function (request, response) {
	'use strict';

	response.send('Hello World!');
});

app.listen('3000', function () {
  'use strict';

	console.log('Express app stated on port 3000');
});
