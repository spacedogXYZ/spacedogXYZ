function resize() {
  try {
    var fullWidth = Number($('.fullwidth').width())
      + Number($('.fullwidth').css('padding-left').split('px')[0]*2);
      //hackery because jQuery doesn't compute width with padding
    var fullHeight = (fullWidth / 1400) * 900;
    $('.fullwidth').css({height: fullHeight});
  } catch(err) {

  }
}


$(document).ready(function() {
  var spacedog = '\n' +
  ' _______                            __               \n'+
  '|     __|.-----.---.-.----.-----.--|  |.-----.-----. \n'+
  '|__     ||  _  |  _  |  __|  -__|  _  ||  _  |  _  | \n'+
  '|_______||   __|___._|____|_____|_____||_____|___  | \n'+
  '         |__|                                |_____| \n'+
  '\n';
  console.log(spacedog);

  $(window).resize(resize);
  resize();
});

