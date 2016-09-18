var app = require("./app.js");
var postpage = require("./postpage.js");
var http = require("http");

var server = http.createServer(app);

server.listen(2000,function () {
    console.log("Server is now running...");
});