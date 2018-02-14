//This file tests the DB config defined in /models/- acceptance testing sample
var assert = require('assert');
const db = require('../models/')


//test to check events model 
describe('TEST: Integration test of articles and notes models ', function () {
    beforeEach(function () {
    });

    it(' should create an article in article table', function () {

        var article = {
            title: 'test title',
            link: ''
            
        }
        db.Article.create(article).then({
            function(data) {
                assert.equal(data.title, "test article")
            }
        }).catch(function (err) {
            })
    });

    it('TEST***  should create a note in notes collection', function () {

        var req = {
            params : {
                id: "5a81d43e427a8b32963472e6"
            }
        }
        var note = {
            title: "Test Title",
            body: "Test Desc"
            
        }
            console.log("updating the note");
            db.Note.update({
                "_id": req.params.id
              }, {
                $set: {
                  "title": "test title",
                  "body": "test body"
                }
              },
              // When that's done, run this function
              function (error, edited) {
                // Show any errors
                if (error) {
                  console.log(error);
                }
                // Otherwise, send the result of our update to the browser
                else {
                  console.log(edited);
                  var results = {
                    note: edited
                  }
                  // If we were able to successfully update an Article, send it back to the client
                  // res.send(edited);
                }
              });
          });
    

});