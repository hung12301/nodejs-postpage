var app = require("./app.js");
var postpage = require("./postpage.js");
var http = require("http");

var server = http.createServer(app);

server.listen(5000,function () {
    console.log("Server is now running on port 5000...");
});