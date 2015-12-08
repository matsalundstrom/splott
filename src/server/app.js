/*global require, console*/
var express = require('express');

var app = express();

var splottRouter = express.Router();

splottRouter.route('/books')
	.get(function(request, response) {
		'use strict';
		
		var responseJson = {hello: 'this is my api'};
		
		response.json(responseJson);
	});
	
app.use('/api', splottRouter);

app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.get('/', function (request, response) {
	'use strict';

	response.send('Hello Big World!');
});

app.listen('3000', function () {
  'use strict';

	console.log('Express app stated on port 3000');
});
