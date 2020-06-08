"use strict";

function changeColour() {
  var color = generateColour();
  var box = document.getElementById("visualcolour").style.backgroundColor = color;
  document.getElementById("rgbshow").innerHTML = color;
}

function generateColour() {
  var arrOfColours = [];
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    arrOfColours.push(num);
  }
  var newRgb =
    "RGB(" +
    arrOfColours[0] +
    "," +
    arrOfColours[1] +
    "," +
    arrOfColours[2] +
    ")";
  return newRgb;
}
