$('form').submit(function(event) {
  event.preventDefault();
  $("form").validate({
    submitHandler: function(form) {
      $.ajax({
        method: "POST",
        data: $('form').serializeArray(),
        success: function() { 
          $('form').slideUp();
          $('#success').slideDown();
        }
      });
    }
  });
});