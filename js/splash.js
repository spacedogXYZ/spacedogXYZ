function resetOverlay() {
  var fullHeight = $('#splash #stars').height();
  var fullWidth = $('#splash #stars').width();
  $('#splash .overlay').each(function(index) {
    $(this).css({top: -1*(index+1)*fullHeight+5});
  });
  $('#rollover').attr({height: fullHeight, width: fullWidth});

  $('.fullwidth').css({height: fullHeight});
}


$(document).ready(function() {

  $(window).resize(resetOverlay);
  resetOverlay();

  
  $('img[usemap]').rwdImageMaps();

  // bind rollover events
  $('area').on('mouseover', function() {
    if($(this).attr('alt')) {
      $('img#rollover').attr({src: '/static/splash/'+$(this).attr('alt')+'.png'});
    }
  });
  $('area').on('mouseout', function() {
    $('img#rollover').attr({src: '/static/splash/transparent.png'});
  });

  // update schedule
  var last_date = new Date($('h2.availability a').first().data('date'));
  if (new Date() > last_date) {
    $('h2.availability a').text('Booking now for new missions');
  }

  // scroll down to logo top
  var logo_top = $('h1#logo').offset().top - 30;
  $('body').delay(1000).animate({scrollTop : logo_top }, 2000, 'swing');
});

