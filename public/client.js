$(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    // var dream = $('input').val();
    // $.post('/dreams?' + $.param({dream: dream}), function() {
    //   $('<li></li>').text(dream).appendTo('ul#dreams');
    //   $('input').val('');
    //   $('input').focus();
    // });
  });
});
