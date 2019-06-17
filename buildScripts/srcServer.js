// The purpose of this file is that it configures a Web Server
// that will serve up the files in our source directory.

/**
 * First we need EXPRESS which is one of our installed packages...
 * ...then we need a reference to PATH and a reference to OPEN...
 * ...which we will use to open our site in the browser.
 */
var express = require('express');
var path = require('path');
var open = require('open');

/**
 * Select a PORT availbale in your machine, then create an instance...
 * of EXPRESS
 */
var port = 3000;
var app = express();

/**
 * Declare ROUTING...
 * Now tell Express which routes it should handle... let us say any...
 * references to the root should be handled by this function which...
 * takes a request and a response.
 * Note: __dirname is a special variable that references the...
 * directory we are currently in, in this case, the root of the project.
 */
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

/**
 * We now tell Express we want it to listen on the Port we have...
 * defined above... the we hand some error handling mechanism.
 */
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
	}
});
