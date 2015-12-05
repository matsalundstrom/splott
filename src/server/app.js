/*global require, console*/
var express = require('express');

var app = express();

app.get('/', function (request, response) {
	'use strict';

	response.send('Hello World!');
});

app.listen('3000', function () {
  'use strict';

	console.log('Express app stated on port 3000');
});
