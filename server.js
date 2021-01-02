const config = require(__dirname + '/config.json'); // подключение конфига с настройками
const http = require('http'); // модуль для создания сервера
const server = new http.Server(); // создание объекта сервера
const qs = require('querystring'); // модуль для парсинга тела POST/GET-запроса в виде urlencoded-строки
const fs = require('fs'); // модуль файловой системы
const Readable = require('stream').Readable; // конструктор для создания читаемого потока, который берётся из модуля потоков
const port = process.env.PORT || config.port;

server.on('request', function (req, res) {
	var errorCode = false;
	var path = req.url.split('/');

	// Для всех GET-запросов будет отдаваться один и тот же каркас, который потом подгрузит нужную страницу
	if (req.method == 'GET') {

		if (path[1] == '') {

			var indexPath = './public/index.html';
			fs.access(indexPath, fs.constants.R_OK, err => {
				if (err) {
					errorCode = 404;
				} else {
					fs.createReadStream(indexPath).pipe(res);
				}
			});
	
			if (errorCode) {
				var stream = new Readable();
				var html = `
					<!DOCTYPE html>
					<html>
						<head>
							<title>Simple NodeJS</title>
						</head>
						<body>
							<h1>Error ` + errorCode + `</h1>
						</body>
					</html>
				`;
				res.statusCode = errorCode;
				res.setHeader('Content-Type', 'text/html; charset=utf-8');
				res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
				var stream = new Readable();
				stream.push(html);
				stream.push(null); // указываем окончание вывода потока
				stream.pipe(res);
			}

		} else {

			fs.access(req.url, fs.constants.R_OK, err => {
				if (err) {
					errorCode = 404;
				} else {
					fs.createReadStream(req.url).pipe(res);
				}
			});
	
			if (errorCode) {
				var stream = new Readable();
				var html = req.url;
				res.statusCode = errorCode;
				res.setHeader('Content-Type', 'text/html; charset=utf-8');
				res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
				var stream = new Readable();
				stream.push(html);
				stream.push(null); // указываем окончание вывода потока
				stream.pipe(res);
			}

		}

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

server.listen(port);