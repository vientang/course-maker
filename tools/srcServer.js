import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import config from '../webpack.config.dev.js';
import open from 'open';
import colors from 'colors';

/* eslint-disable no-console */
const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(express.static('../dist'));

app.use(require	('webpack-hot-middleware')(compiler));

// routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.post('/', (req, res, next) => {
	console.log('User:', req.body.name);
	res.send('Your sign up was successful!');
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Listening on port: ${port}`.green);
		open(`http://localhost:${port}`);
	}
});