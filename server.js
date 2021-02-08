const config = require(__dirname + '/server-config.json'); // подключение конфига с настройками
const http = require('http'); // модуль для создания сервера
const server = new http.Server(); // создание объекта сервера
const qs = require('querystring'); // модуль для парсинга тела POST/GET-запроса в виде urlencoded-строки
const fs = require('fs'); // модуль файловой системы
const Readable = require('stream').Readable; // конструктор для создания читаемого потока, который берётся из модуля потоков
const port = process.env.PORT || config.port;

server.on('request', function (req, res) {

	let path = req.url.split('/');
	if (path.length > 2 && path[path.length - 1] == '') {
		path = path.slice(0, -1);
		res.writeHead(301, { 'Location': path.join('/') });
		res.end();
	} else {

		if (req.method == 'GET') {

			let filePath = config.publicFolder + req.url.split('?', 1)[0];
			if (path[1] == 'files') {
				filePath = '.' + req.url.split('?', 1)[0];
			}
			fs.stat(filePath, (err, stats) => {

				if (err || stats.isDirectory()) {
					if (err) {
						res.statusCode = 200;
					} else if (stats.isDirectory() && filePath != (config.publicFolder + '/')) {
						res.statusCode = 404;
					} else {
						res.statusCode = 200;
					}
					filePath = config.publicFolder + '/index.html';
					fs.stat(filePath, (err, stats) => {
						res.setHeader('Content-Type', 'text/html; charset=utf-8');
						res.setHeader('Content-Length', stats.size);
						fs.createReadStream(filePath).pipe(res);
					});
				} else {
					res.statusCode = 200;
					let fileType = config.MIMETypes[filePath.substr(filePath.lastIndexOf('.') + 1)];
					if (fileType !== undefined) {
						res.setHeader('Content-Type', fileType + '; charset=utf-8');
					} else {
						res.setHeader('Content-Type', 'text/plain; charset=utf-8');
					}
					res.setHeader('Content-Length', stats.size);
					fs.createReadStream(filePath).pipe(res);
				}

			});

		}

		if (req.method == 'POST') {
			let post = '';

			req.on('data', function (chunk) {
				if (chunk !== null) post += chunk;
				if (post.length > 1e4) {
					res.statusCode = 413;
					res.end(config.errors.unknown);
				}
			});

			// в случае, если POST-запрос успешно принят, решаем, что делать с ним дальше
			req.on('end', function () {

				if (req.headers['content-type'] == config.MIMETypes.form && post !== '') {
					post = qs.parse(post);
				} else {
					post = {};
				}

				if (path[1] == 'posts' && !path[2]) {

					fs.readFile('./fake-db.txt', function (error, data) {
						if (!error) {
							let obj = JSON.parse(data);
							if (!post.page) post.page = 1;
							obj.posts.list = obj.posts.list.slice(6 * (post.page - 1), 6 * post.page);
							obj.posts.page = parseInt(post.page);
							res.statusCode = 200;
							res.setHeader('Content-Type', config.MIMETypes.json + '; charset=utf-8');
							res.end(JSON.stringify(obj.posts));
						} else {
							res.statusCode = 404;
							res.end(null);
							console.log(error);
						}
					});

				} else if (path[1] == 'posts' && path[2]) {

					fs.readFile('./fake-db.txt', function (error, data) {
						if (!error) {
							let obj = JSON.parse(data);
							let find = false;
							obj.posts.list.forEach((item) => {
								if (item.id == parseInt(path[2])) {
									find = item;
								}
							});
							if (find) {
								res.statusCode = 200;
								res.setHeader('Content-Type', config.MIMETypes.json + '; charset=utf-8');
								res.end(JSON.stringify(find));
							} else {
								res.statusCode = 404;
								res.end(JSON.stringify(false));
							}
						} else {
							res.statusCode = 404;
							res.end(null);
							console.log(error);
						}
					});

				} else if (path[1] == 'auth' && post.login && post.password) {

					fs.readFile('./fake-db.txt', function (error, data) {
						if (!error) {
							let obj = JSON.parse(data);
							if (obj.user.login == post.login && obj.user.password == post.password) {
								res.statusCode = 200;
								res.setHeader('Content-Type', config.MIMETypes.json + '; charset=utf-8');
								res.end(JSON.stringify({ login: true }));
							} else {
								res.statusCode = 200;
								res.end(JSON.stringify({ login: false }));
							}
						} else {
							res.statusCode = 404;
							res.end(null);
							console.log(error);
						}
					});

				} else {
					res.statusCode = 404;
					res.end(null);
				}

			});

		}

	}

});

server.timeout = config.timeout;
server.listen(port);