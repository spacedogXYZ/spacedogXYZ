
$(window).load(function() {
  var svgDoc = $('object.map')[0].contentDocument; // Get the document object for the SVG
  $('#location circle', svgDoc).animate(
        { r: 10 },
        {
            duration: 500,
            step: function(s) { $(this).attr('r', s); }
        });
});