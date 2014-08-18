function resetOverlay() {
  console.log('resetOverlay');
  var offset = $('#splash #stars').height();
  var fullWidth = $('#splash #stars').width();
  $('#splash .overlay').each(function(index) {
    $(this).css({top: -1*(index+1)*offset});
  });
  $('#splash').css({height:offset});
  $('#rollover').attr({height: offset, width: fullWidth});
}


$(document).ready(function() {
  console.log('spacedog');

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


});

