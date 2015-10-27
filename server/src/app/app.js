/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */
var express = require('express');
var users = require('./router/users');
var bodyparse = require('body-parser');
var multer = require('multer');
var app = express();

/*
 解决跨域问题
 */
app.use(function(req, res, next) {
    req.rawBody = '';
    req.setEncoding('utf8');

    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });

    req.on('end', function() {
        next();
    });
});

//app.use(bodyparse.urlencoded({extended: true}));
app.use(bodyparse.json());
//app.use(bodyparse.text());
//app.use(bodyparse.raw());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
app.get('/', function (req, res) {
    res.send('hello world');
});
app.use('/users', users);
app.use('/static', express.static('static'));
process.on('uncaughtException', function (err) {
    console.log(err + "捕获");
});
var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
