function resetOverlay() {
  var fullHeight = $('#splash #stars').height();
  var fullWidth = $('#splash #stars').width();
  $('#splash .overlay').each(function(index) {
    $(this).css({top: -1*(index+1)*fullHeight+5});
  });
  $('#rollover').attr({height: fullHeight, width: fullWidth});

  $('.fullwidth').css({height: fullHeight});

  // setup testimonial slider
  $("#testimonials ul").slidesjs({
    navigation: { active: false, },
    pagination: { active: false },
    play: { active: false, auto: true },
    width: fullHeight,
    height: fullWidth,
  });
}

function scrollIntro() {
  if ($(window).scrollTop() !== 0) {
    return false;
  } else {
    // animate scroll down to logo top
    var logo_top = $('h1#logo').offset().top - 30;
    $(window).scrollTop(0);
    $('body').delay(1000).animate({scrollTop : logo_top }, 2000, 'swing');
  }
}


$(document).ready(function() {

  $(window).resize(resetOverlay);
  resetOverlay();

  // responsive image map
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

  // randomize testimonial start
  $("#testimonials ul").slidesjs({
    start: Math.floor(Math.random()* $("#testimonials ul li").length),
  });

  // update schedule
  var last_date = new Date($('h2.availability a').first().data('date'));
  if (new Date() > last_date) {
    $('h2.availability a').text('Booking now for new missions');
  }

  // delay scrollIntro just momentarily, so window top is set before we scroll
  window.setTimeout(scrollIntro, 10);
});

