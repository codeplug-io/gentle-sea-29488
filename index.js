const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ bye: 'buddy' })
});

if( process.env.NODE_ENV === 'production' ) {
	//Express will serve up the index.html file
	//like our main.js file, or main.css file!
	app.use( express.static('client/build') );

	//Express will serve up the index.html file
	//if it doesnt recongnize the route
	const path = require('path');
	app.get( '*', (req, res) => {
		     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
			});
	}else {
		app.use( express.static('client/build') );

		app.get( '/', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
		   });
	}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

