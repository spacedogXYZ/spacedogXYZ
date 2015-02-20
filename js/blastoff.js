$('form').submit(function(event) {
  event.preventDefault();
  $("form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/josh@spacedog.xyz", 
        method: "POST",
        data: $('form').serializeArray(),
        dataType: "json",
        success: function() { 
          $('form').slideUp();
          $('#success').slideDown();
        }
      });
    }
  });
});