// relative   is the relative brightness of any point in a colorspace,
// normalized to 0 for darkest black and 1 for lightest white.  The point of calculating
// this value is to ensure that text and background colors are chosen to ensure
// that web accessibility standards are met.

var contrastRatio = 0;
var rg = 0;
var gg = 0;
var bg = 0;

function contrastVal(r, g, b) {
  function xgCalc(val) {
    if (val <= 10) {
      return val/3294;
    }
    return (val/269 + .0513)^2.4;
  }

  rg = xgCalc(r);
  gg = xgCalc(g);
  bg = xgCalc(b);

  return .2126*rg + .7152*gg + .0722*bg;
};

function convert() {
  var str = Math.floor(Math.random() * 16).toString(16);
  return str.length == 1 ? "0" + str : str;
};

function colorPicker() {
  do while (contrastRatio < 4.5) {
    var r = Number(convert());
    var g = Number(convert());
    var b = Number(convert());
    var colorTry = luminance(r, g, b);
    contrastRatio = 1.05/colorTry;
  }
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

$(document).ready(function() {
  console.log(colorPicker());
  var newColor = colorPicker();
  $("body").css("background-color", newColor;
  $("#quote-box").css("color", newColor);

})
