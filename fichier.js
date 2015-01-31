// Copyright GS38, 2015
// ftp module must be installed 


var fs = require('fs');
var Client = require('ftp');
var ftp_parameter;
var myFile= '/home/root/ftp.ini';
var c = new Client();


c.on('ready', function() {
    c.list(function(err, list) {
        if (err) throw err;
//        console.dir(list);
        console.log("list[0].name = ", list[0].name);
        c.end();
    });
});

fs.readFile(myFile, 'utf-8', function (err, data) {
    if (err) throw err ;
    ftp_parameter = JSON.parse(data);
    console.log(ftp_parameter.host);
    c.connect(ftp_parameter);
});
