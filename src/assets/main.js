$(function() {
  $.ajax('https://www.codeschool.com/users/anka-adesso.json', {
    dataType: 'jsonp',
    success: function(response) {
      //handle
    }
  })

  $('.course > h3').html

  // your code will go here

  $.ajax({
    url: 'https://www.codeschool.com/users/anka-adesso.json',
    dataType: 'jsonp',
    success: function(response){
      $.each(response, function(i, c){
        var c.courses.completed.append("<div class='course'></div>");

      });
    },
    $(‘#badges’).html(courses.completed);
  });
});
