const express = require("express");
const app = express.Router();
const db = require('../models/')
// / Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
app.get("/", (req, res) => {
  res.render('index', {});
});

// app.get("/articles", (req, res) => {
//   res.render('articles', {});
// });

app.get("/scrape", function (req, res) {
  console.log("scraping");
  // First, we grab the body of the html with request
  axios.get("http://www.echojs.com/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function (i, element) {
      // Save an empty result object
      var result = {};
      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");
      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function (dbArticle) {
          // View the added result in the console

          console.log(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });
    // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all Articles from the db and displaying in articles.handlebars 
app.get("/articles", function (req, res) {
  console.log("app.get/articles");
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function (data) {
      var results = {
        articles: data

      }
      // If we were able to successfully find Articles, send them back to the client
      // res.json(results);
      console.log(data[0].title);
      console.log(data[0].id);

      res.render('articles', results);
      // res.render('articles', {articles : JSON.stringify(dbArticle)});

    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// grab one Article to view
// db.Article.findOne({ _id: req.params.id })


// app.get("/articles/:id", (req, res) => {
// console.log("grab one Article to view");
//   db.Article.findOne({ _id: req.params.id })

//           // where: {
//           //     // _id: 'ObjectId(' + req.params.id + ')'

//           // }

//       // })
//       .then(function (data) {
//         console.log(data);
//         var results = {
//           article: data
//       }
//       res.render('article', results);
//           // console.log(data);
//           // res.json(data);
//       })
//       //catch block to ensure if invalid data input the app does not crash
//       .catch(function (err) {
//           res.json(err);
//       })
// });

// Route for grabbing a One Article by id, populate it with it's note
app.get("/articles/:id", function (req, res) {
  console.log("APP.GET /articles/:id populated");
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Article.findOne({
      _id: req.params.id
    })

    // ..and populate all of the notes associated with it
    .populate("notes")
    .then(function (data) {

      // If we were able to successfully find an Article with the given id, send it back to the client
      console.log(data);
      var results = {
        article: data,
        note: data.notes
      }
      res.render('article', results);
      // console.log(data);
      // res.json(data);

      // res.json(dbArticle);

    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving an Article's associated Note
app.post("/articles/:id", function (req, res) {
  // Create a new note and pass the req.body to the entry
  console.log("/articles/:id to POST a note to an article");
  db.Note.create(req.body)
    .then(function (dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      // return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      return db.Article.findOneAndUpdate({}, {
        $push: {
          notes: dbNote._id
        }
      }, {
        new: true
      });

    })
    .then(function (data) {
      var results = {
        note: data

      }
      // If we were able to successfully update an Article, send it back to the client
      res.render('article', results);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });


  //route for update an articles note
  app.put("/notes/:id", function (req, res) {
    console.log("updating the note");
    db.Note.update({
        "_id": mongojs.ObjectId(req.params.id)
      }, {
        // Set "read" to false for the book we specified
        $set: {
          "title": req.params.title,
          "desc": req.params.desc
        }
      },
      // When that's done, run this function
      function (error, edited) {
        // Show any errors
        if (error) {
          console.log(error);
          res.send(error);
        }
        // Otherwise, send the result of our update to the browser
        else {
          console.log(edited);
          var results = {
            note: edited
          }
          // If we were able to successfully update an Article, send it back to the client
          res.render('article', edited);
          // res.send(edited);
        }
      });
  });


  //route for del of note
  app.delete("/articles/:id", function (req, res) {
    console.log("first removing the note from article");



    db.Article.update({
        "_id": mongojs.ObjectId(req.params.id)
      }, {
        // Set "read" to false for the book we specified
        "$pull": {
          "notes": req.body.id
        }
      },

      db.Note.fineOneAndRemove({
          "_id": mongojs.ObjectId(req.body.id)
        },


        // When that's all done, run this function
        function (error, res) {
          // Show any errors
          if (error) {
            console.log(error);
            res.send(error);
          }
          // Otherwise, send the result of our update to the browser
          else {

            // If we were able to successfully remove note from an Article, and delete the note
            res.render('article', res);

            // res.send(edited);
          };
        }));
  });

/// Route for grabbing a One Article by id, populate it with it's note
app.get("/notes/:id", function (req, res) {
  console.log("APP.GET /notes/:id");
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Notes.findOne({
      _id: req.params.id
    })

    // ..and populate all of the notes associated with it
    .then(function (data) {

      // If we were able to successfully find an Article with the given id, send it back to the client
      console.log(data);
      var results = {
        note: data
      }
      // res.render('create.note', results);
      console.log(results);
      res.json(results);

      // res.json(dbArticle);

    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


});

module.exports = app;