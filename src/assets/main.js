$(function() {
  $.ajax('https://www.codeschool.com/users/anka-adesso.json', {
    dataType: 'jsonp',
    success: function(response) {
      //handle
    }
  })

  $('.course > h3').html

  // your code will go here

  $.ajax({url: 'https://www.codeschool.com/users/anka-adesso',
  dataType: 'jsonp',
  success: function(response){
    $.each(response.courses.completed, function (i, c) {
    var courses.completed = $('<div></div>');
    courses.completed.find('div').html(c);
    return courses.completed;
    }
  }
});


});
