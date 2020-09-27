'use strict';

/**
 * DrawBar : Is a class who represent a loading's bar
 * @param {Number} sum : Represente the total value of our DrawBar
 * @param {Number} nbr : Represent the value of our DrawBar loaded
 */
var DrawBar = function DrawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

DrawBar.prototype.run = function() {
  var drawBar = document.createElement('div');
  var fullBar = document.createElement('div');

  drawBar.style.width = "90vw";
  drawBar.style.height = "5vh";
  drawBar.style.margin = "0 auto";
  drawBar.style.border = "1px solid black";

  fullBar.style.width = "40%";
  fullBar.style.height = "100%";
  fullBar.style.backgroundColor = "green";

  drawBar.appendChild(fullBar);
  document.body.appendChild(drawBar);
}