//   When you click the scrape article button scrape all articles from site
$(document).on("click", "#scrape", function () {
    window.location = "/scrape";
});

   // When you click the save article button
   $(document).on("click", "#article-save", function() {
    // Grab the id abnd title and link associated with the article from the submit button
    console.log("saving article");
    var thisId = $(this).attr("data-id");
    var thisTitle = $(this).attr("data-title");
    var thisLink = $(this).attr("data-link");
    // var results = {};
    //save article in db collection articles
    $.ajax({
      method: "POST",
      url: "/articles/",
      data: {
        // Value taken from title input
        "title": thisTitle,
        "link": thisLink
      }
    })
      // With that done
      .done(function(results) {
        // Materialize.toast('Article Saved!', 4000)
      window.location =  "/articles/" + results._id;
        
      });
      
      // var currentURL = window.location;
  });

  $(document).on("click", "#article-view", function() {
    // Grab the id abnd title and link associated with the article from the submit button
    console.log("viewing article");
    var articleId = $(this).attr("data-id");
    
    
    
    // var thisTitle = $(this).attr("data-title");
    // var thisLink = $(this).attr("data-link");

    // $.ajax({
    //   method: "GET",
    //   url: "/articles/" + articleId
    
    // })
    //   // With that done
    //   .done(function(results) {
    //     // Materialize.toast('Article Saved!', 4000)
      window.location =  "/articles/" + articleId;
        
      // });
      
      // var currentURL = window.location;
  });
