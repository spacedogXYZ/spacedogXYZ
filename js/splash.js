function resetOverlay() {
  var fullHeight = $('#splash #stars').height();
  var fullWidth = $('#splash #stars').width();
  $('#splash .overlay').each(function(index) {
    $(this).css({top: -1*(index+1)*fullHeight});
  });
  $('#rollover').attr({height: fullHeight, width: fullWidth});

  $('.fullwidth').css({height: fullHeight});
}


$(document).ready(function() {
  console.log('Spacedog');

  $(window).resize(resetOverlay);
  resetOverlay();

  
  $('img[usemap]').rwdImageMaps();

  // bind rollover events
  $('area').on('mouseover', function() {
    $('img#rollover').attr({src: '/static/splash/'+$(this).attr('alt')+'.png'});
  });
  $('area').on('mouseout', function() {
    $('img#rollover').attr({src: '/static/splash/transparent.png'});
  });

  // stick frontpage sections
  /* janky, kill it
  $('section.fullwidth').not('#splash').waypoint(function() {
    console.log('stop at '+$(this).attr('id'));
    $(window).disableScroll({releaseAfter: 200,
        doAfter: function() {
          console.log('move along now');
          $.fn.scrollTo($(this).next('section'));
          $(window).disableScroll('undo');
        }
    });
  }, { offset: 20, direction: 'down right', triggerOnce: true });
  */
});

