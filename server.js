
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Handlebars = require('handlebars');
var exphbs = require('express-handlebars');
var path = require("path");
const router = require('./routes/routes');
const app = express();
require('dotenv').config();
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("./models");
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
const PORT = 3000;
// Initialize Express

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
//make all files available in Public folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router);
// app.use('/', api);
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
var saved;
// hbs to test if article is saved will be used in articles.handlebars
Handlebars.registerHelper("isSaved", function (saved) {
    console.log("saved\n" + saved);
    if (saved === true || saved === false) {
        return true;
    } else {
        return false;
    }
});


// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/webscrapermongoose", {
//   useMongoClient: true
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});