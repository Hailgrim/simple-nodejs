const config = require(__dirname + '/config.json'); // подключение конфига с настройками
const http = require('http'); // модуль для создания сервера
const server = new http.Server(); // создание объекта сервера
const qs = require('querystring'); // модуль для парсинга тела POST/GET-запроса в виде urlencoded-строки
const fs = require('fs'); // модуль файловой системы
const Readable = require('stream').Readable; // конструктор для создания читаемого потока, который берётся из модуля потоков
const port = process.env.PORT || config.port;

server.on('request', function (req, res) {
	var path = req.url.split('/');

	if (req.method == 'GET') {

		var filePath = config.publicFolder + req.url;
		if (path[1] == '') filePath = config.publicFolder + '/index.html';

		fs.stat(filePath, (err, stats) => {
			if (err) {
				res.statusCode = 404;
				var stream = new Readable();
				stream.push(null);
				stream.pipe(res);
			} else {
				res.statusCode = 200;
				var fileType = config.MIMETypes[filePath.substr(filePath.lastIndexOf('.') + 1)];
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
		var post = '';

		req.on('data', function (chunk) {
			if (chunk !== null) post += chunk;
			if (post.length > 1e4) {
				res.statusCode = 413;
				res.end(config.errors.unknown);
			}
		});

		// в случае, если POST-запрос успешно принят, решаем, что делать с ним дальше
		req.on('end', function () {

			if (path[1] == '') {

			}

		});

	}

});

server.timeout = config.timeout;
server.listen(port);