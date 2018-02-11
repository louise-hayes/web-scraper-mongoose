// Grab the articles as a json that are saved
$.getJSON("/articles", function (data) {
    console.log("displaying articles");
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles-table").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
});

//   When you click the save article button
$(document).on("click", "#scrape", function () {
    // Grab the id associated with the article from the submit button
    // var thisId = $(this).attr("data-id");
    // Run a POST request to change the note, using what's entered in the inputs
    window.location = "/scrape";

    // $.ajax({
    //   method: "GET",
    //   url: "/scrape/" + thisId,
    //   data: {
    //     // Value taken from title input
    //     article_name: $("#article_name_input").val(),
    //     article_summary: $("#article_summary_input").val(),
    //     article_URL: $("#article_URL_input").val(),
    //   }
    // })
    // With that done
    //   .then(function(results) {
    //     // Log the response
    //     console.log(results);
    //     // Empty the article section
    //     res.render('articles', results);
    //     // $("#article_see").empty();
    //   });
    // Also, remove the values entered in the input for article entry
    // $("#article_name_input").val("");
    // $("#article_summary_input").val("");
    // $("#article_URL_input").val("");

});

//   // Whenever someone clicks a p tag
//   $(document).on("click", "p", function() {
//     // Empty the notes from the note section
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).attr("data-id");
//     // Now make an ajax call for the Article
//     $.ajax({
//       method: "GET",
//       url: "/articles/" + thisId
//     })
//       // With that done, add the note information to the page
//       .then(function(data) {
//         console.log(data);
//         // The title of the article
//         $("#notes").append("<h2>" + data.title + "</h2>");
//         // An input to enter a new title
//         $("#notes").append("<input id='titleinput' name='title' >");
//         // A textarea to add a new note body
//         $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//         // A button to submit a new note, with the id of the article saved to it
//         $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
//         // If there's a note in the article
//         if (data.note) {
//           // Place the title of the note in the title input
//           $("#titleinput").val(data.note.title);
//           // Place the body of the note in the body textarea
//           $("#bodyinput").val(data.note.body);
//         }
//       });
//   });


//    // When you click the savenote button
//    $(document).on("click", "#note-save", function() {
//     // Grab the id associated with the article from the submit button
//     var thisId = $(this).attr("data-id");
//     // Run a POST request to change the note, using what's entered in the inputs
//     $.ajax({
//       method: "POST",
//       url: "/articles/" + thisId,
//       data: {
//         // Value taken from title input
//         title: $("#titleinput").val(),
//         // Value taken from note textarea
//         body: $("#bodyinput").val()
//       }
//     })
//       // With that done
//       .then(function(data) {
//         // Log the response
//         console.log(data);
//         // Empty the notes section
//         $("#notes").empty();
//       });
//     // Also, remove the values entered in the input and textarea for note entry
//     $("#titleinput").val("");
//     $("#bodyinput").val("");
//   });


   // When you click the save article button
   $(document).on("click", ".see-article", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
    // Run a POST request to change the note, using what's entered in the inputs
   
    window.location = "/articles/" + thisId;

    // $.ajax({
    //   method: "POST",
    //   url: "/articles/" + thisId,
    //   data: {
    //     // Value taken from title input
    //     article_name: $("#article_name_input").val(),
    //     article_summary: $("#article_summary_input").val(),
    //     article_URL: $("#article_URL_input").val(),
    //   }
    // })
    //   // With that done
    //   .then(function(results) {
    //     // Log the response
    //     console.log(results);
    //     // Empty the article section
    //     // $("#article_see").empty();
    //   });
    // Also, remove the values entered in the input for article entry
    // $("#article_name_input").val("");
    // $("#article_summary_input").val("");
    // $("#article_URL_input").val("");

  });

  // When you click the save article button
  $(document).on("click", "#article-save", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        // Value taken from title input
        article_name: $("#article_name_input").val(),
        article_summary: $("#article_summary_input").val(),
        article_URL: $("#article_URL_input").val(),
      }
    })
      // With that done
      .then(function(results) {
        // Log the response
        console.log(results);
        // Empty the article section
        // $("#article_see").empty();
      });
    // Also, remove the values entered in the input for article entry
    // $("#article_name_input").val("");
    // $("#article_summary_input").val("");
    // $("#article_URL_input").val("");

  });