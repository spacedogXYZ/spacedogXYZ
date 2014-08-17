function resetOverlay() {
  console.log('resetOverlay');
  var offset = $('#splash #stars').height();
  $('#splash .overlay').each(function(index) {
    $(this).css({top: -1*(index+1)*offset});
  });
  $('#splash').css({height:offset});
}

$(document).ready(function() {
  console.log('spacedog');

  $(window).resize(resetOverlay);
  resetOverlay();
});

