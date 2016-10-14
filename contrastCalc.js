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
  console.log(r, rg);
  gg = xgCalc(g);
  bg = xgCalc(b);

  return .2126*rg + .7152*gg + .0722*bg;
};

function colorPicker() {
  var i = 0;
  while (contrastRatio < 1) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colorTry = contrastVal(r, g, b);
    contrastRatio = 1.05/colorTry;
    // console.log(i, contrastRatio, r, g, b);
    i++;
  }
  var newColor = "rgb(" + r + "," + g + "," + b + ")";
  // console.log(newColor);
  return newColor;
};

$(document).ready(function() {
  // console.log(colorPicker());

});

export {colorPicker};
