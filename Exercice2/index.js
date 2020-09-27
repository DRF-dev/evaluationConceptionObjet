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

/**
 * percentageBarLoaded : return a percentage of the drawBar loaded
 */
DrawBar.prototype.percentageBarLoaded = function() {
  if (this.sum <= this.nbr) {
    return 100;
  }
  return (100 * this.nbr)/this.sum;
}

/**
 * run : create a drawbar with the loaded part colored in green
 */
DrawBar.prototype.run = function() {
  var drawBar = document.createElement('div');
  var fullBar = document.createElement('div');

  drawBar.style.width = "90vw";
  drawBar.style.height = "5vh";
  drawBar.style.margin = "0 auto";
  drawBar.style.border = "1px solid black";

  fullBar.style.width = this.percentageBarLoaded() + "%";
  fullBar.style.height = "100%";
  fullBar.style.backgroundColor = "green";

  drawBar.appendChild(fullBar);
  document.body.appendChild(drawBar);
}

var loading = new DrawBar(144, 122);
loading.run();