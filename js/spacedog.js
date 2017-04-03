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

function uaCheck() {
  if (navigator.userAgent.indexOf("MSIE") >= 0) return 'ie';
  if (navigator.userAgent.indexOf("Firefox") >= 0) return 'firefox';
  if (navigator.userAgent.indexOf("Safari") >= 0) return 'safari';
  if (navigator.userAgent.indexOf("Chrome") >= 0) return 'chrome';
}

function log(message) {
  // gratouitusly borrowed from isitchristmas?
  // https://konklone.com/post/how-to-hack-the-developer-console-to-be-needlessly-interactive

  // simple MSIE check. probably won't work for 11 or edge
  var plainConsole = window._ie;

  // if in plain-text mode, strip out %c and don't pass on extra args
  if (plainConsole) {
    console.log(message.replace(/%c/gi, ''));
  } else {
    // if any args beyond message, pass them on
    var args = Array.prototype.slice.call(arguments, [1]);
    if (args.length > 0) {
      console.log.apply(console, [message].concat(args));
    }
    // otherwise, assume plain text bare message
    else {
      console.log(message);
    }
  }
};
window.log = log;

$(document).ready(function() {
  window._browserMatch = uaCheck();

  var spacedog = "\n%c" +
    " _______                            __               \n"+
    "|    ___|.-----.---.-.----.-----.--|  |.-----.-----. \n"+
    "|___    ||  _  |  _  |  __|  -__|  _  ||  _  |  _  | \n"+
    "|_______||   __|___._|____|_____|_____||_____|___  | \n"+
    "         |__|                                |_____| \n"+
    "\n"
  window.log(spacedog, "color: orange; font-weight: bold; font-family: monospace;");

  $(window).resize(resize);
  resize();
});

