var http = require('http');
var https = require('https');

var server = http.createServer(function (req, res) {
    // res.writeHead(
    //     302, 
    //     {
    //         'Content-Security-Policy': "frame-ancestors *.baidu.com www.vstecscloud.com;",
    //         'Content-Type': 'text/plain;charset=utf-8',
    //         'location': 'https://login-vcp.baidu-int.com/'
    //     }
    // );
    res.write('这是一个iframe页面')
    res.end();
});

server.listen(3100)