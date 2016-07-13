/**
 * Created by Admin on 13/07/2016.
 */
var app = require("./app.js");
var http = require("http");

var server = http.createServer(app);

server.listen(2000,function () {
    console.log("Server is now running...");
});
