
//   When click the scrape button
$('#scrape').click( function () {

  var currentURL = window.location.origin;
  //redirect to /scrape page
  window.location = currentURL + "/scrape/";
});