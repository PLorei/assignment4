// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var data;

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  $.ajax({
    url: "http://www.mattbowytz.com/simple_api.json?data=all",
    success:function(result) {
      var interests = result.data.interests;
      var programming = result.data.programming;
      data = interests.concat(programming);

    }
  });

})();

function showResults() {
  $(".flexsearch").hide();
  $("#results-header").show();
}

function keyPressed() {
  $("#results-list").empty();
  var entry = $(".flexsearch-input").val();
  var matches = [];
  $.each(data, function(index, value){
    if((entry.length > 0) && (value.toLowerCase().startsWith(entry.toLowerCase()))) {
      matches.push(value);
    }
  });
  $.each(matches, function(index, value) {
    $("#results-list").append(
    "<a target='_blank' href='https://www.google.com/#q="
    + value
    + "'>"
    + "<li class='results-element'>"
    + value
    + "</li></a>");
  });
  if(matches.length > 0) {
    $("#results-list").addClass("full");
    $("#results-list").removeClass("empty");
  }
  else {
    $("#results-list").addClass("empty");
    $("#results-list").removeClass("full");
  }
}
