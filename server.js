import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

import config from './server-config.json';

const __dirname = path.resolve();
const PORT = process.env.PORT || config.port;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, config.publicFolder)));
app.use('/files', express.static(path.resolve(__dirname, 'files')));

app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, config.publicFolder, 'index.html'));
});

app.route('/posts')
	.get((req, res) => {
		res.status(200).sendFile(path.resolve(__dirname, config.publicFolder, 'index.html'));
	})
	.post((req, res) => {

		fs.readFile('./fake-db.txt', (error, data) => {
			if (!error) {
				let obj = JSON.parse(data);
				let page = req.body.page ? parseInt(req.body.page) : 1;
				obj.posts.list = obj.posts.list.slice(6 * (page - 1), 6 * page);
				obj.posts.page = page;
				res.status(200).send(JSON.stringify(obj.posts));
			} else {
				res.status(404).send(null);
			}
		});

	});

app.route('/posts/:id')
	.get((req, res) => {
		res.status(200).sendFile(path.resolve(__dirname, config.publicFolder, 'index.html'));
	})
	.post((req, res) => {

		fs.readFile('./fake-db.txt', (error, data) => {
			if (!error) {
				let obj = JSON.parse(data);
				let find = false;
				obj.posts.list.forEach((item) => {
					if (item.id == req.params.id) {
						find = item;
					}
				});
				if (find) {
					res.status(200).send(JSON.stringify(find));
				} else {
					res.status(404).send(JSON.stringify(null));
				}
			} else {
				res.status(404).send(null);
			}
		});

	});

app.get('/tasks', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, config.publicFolder, 'index.html'));
});

app.post('/auth', (req, res) => {

	fs.readFile('./fake-db.txt', (error, data) => {
		if (!error) {
			let obj = JSON.parse(data);
			if (obj.user.login == req.body.login && obj.user.password == req.body.password) {
				res.status(200).send(JSON.stringify({ login: true }));
			} else {
				res.status(200).send(JSON.stringify({ login: false }));
			}
		} else {
			res.status(404).send(null);
		}
	});

});

app.get('*', (req, res) => {
	res.status(404).sendFile(path.resolve(__dirname, config.publicFolder, 'index.html'));
});

app.listen(PORT);