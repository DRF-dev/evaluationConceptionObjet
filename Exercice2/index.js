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