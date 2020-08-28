const config = require(__dirname + '/config.json'); // подключение конфига с настройками
const http = require('http'); // модуль для создания сервера
const server = new http.Server(); // создание объекта сервера
const qs = require('querystring'); // модуль для парсинга тела POST/GET-запроса в виде urlencoded-строки
const fs = require('fs'); // модуль файловой системы
const Readable = require('stream').Readable; // конструктор для создания читаемого потока, который берётся из модуля потоков
const port = process.env.port || 5000;

server.on('request', function(req, res){

	// Для всех GET-запросов будет отдаваться один и тот же каркас, который потом подгрузит нужную страницу
	if (req.method == 'GET') {
		var stream = new Readable();
		var html = '<!DOCTYPE html><html><head><title>Simple NodeJS</title></head><body><h1>Hello World</h1></body></html>';
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
		stream.push(html);
		stream.push(null); // указываем окончание вывода потока
		stream.pipe(res);
	}
	
});

server.listen(port, config.url);