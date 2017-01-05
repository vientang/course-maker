import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev.js';
import open from 'open';
import colors from 'colors';

/* eslint-disable no-console */
const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require	('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Listening on port: ${port}`.green);
		open(`http://localhost:${port}`);
	}
});