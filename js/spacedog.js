function resize() {
  var fullWidth = Number($('.fullwidth').width())
    + Number($('.fullwidth').css('padding-left').split('px')[0]*2);
    //hackery because jQuery doesn't compute width with padding
  var fullHeight = (fullWidth / 1400) * 900;
  $('.fullwidth').css({height: fullHeight});
}


$(document).ready(function() {
  console.log('Spacedog');

  $(window).resize(resize);
  resize();
});

