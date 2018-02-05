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
    success: function(response) {
      var courses.completed = $.map(response, function(c, i) {
            var listItem = $(‘<div class="course"></div>’);
            $('<h3 />', {text:c.courses.completed.title}).
               appendTo(listItem);

            $('<img />', {src: c.courses.completed.badge}).
               appendTo(listItem);


            $('<a />', {
              'class': 'btn btn-primary',
              target: '_blank',
              href: course.url,
              text: 'See Course'
            }).appendTo(listItem);
            return listItem;
      });
      $(‘#badges’).html(courses.completed);

    }

  });
});
