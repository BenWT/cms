import path from 'path';
import { Server } from 'http';
import Express from 'express';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
	// import data here

	// var fs = require('fs');
	// var obj;
	// fs.readFile('file', 'utf8', function (err, data) {
	// 	if (err) throw err;
	// 	obj = JSON.parse(data);
	// });



	res.render('index');
});

app.get('*', (req, res) => {
	res.render('404');
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (error) => {
	if (error) return console.error(error);
	else return console.info(`Server running on http://localhost:${port} [${env}]`);
});
