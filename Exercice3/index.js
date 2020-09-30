'use strict';

/**
 * MyMorpionXO the class who contain our morpion game
 */
var MyMorpionXO = function MyMorpionXO() {

}

/**
 * createNewTable : create the first or new interface to play at morpion
 */
MyMorpionXO.prototype.createNewTable = function() {
  var table = document.createElement('table');
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";

  for (var i = 0; i < 3; i++) {
    var line = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
      var square = document.createElement('th');
      square.style.border = "0.5px solid black";
      square.style.width = "80px";
      square.style.height = "80px";
      if (i === 0) {
        square.style.borderTop = "hidden";
      }
      if (i === 2) {
        square.style.borderBottom = "hidden";
      }
      if (j === 0) {
        square.style.borderLeft = "hidden";
      }
      if (j === 2) {
        square.style.borderRight = "hidden";
      }
      line.appendChild(square);
    }
    table.appendChild(line);
  }
  document.body.appendChild(table);
}

MyMorpionXO.prototype.turn = function(e) {
  //If the square is not a "th" or is occupated, we canceld 
  if (e.target.tagName !== "TH" || e.target.hasChildNodes()) {
    return;
  }
  e.target.appendChild(this.cross());
}

/**
 * circle : add a circle
 */
MyMorpionXO.prototype.circle = function() {
  var circle = document.createElement('div');
  circle.style.width = "75%";
  circle.style.height = "75%";
  circle.style.margin = "auto";
  circle.style.border = "2px solid black";
  circle.style.borderRadius = "90px";
  return circle;
}

/**
 * cross : add a cross
 */
MyMorpionXO.prototype.cross = function() {
  var cross = document.createElement('div');

  for (var i = 0; i < 2; i++) {
    var bar = document.createElement('div');
    bar.style.width = "100%";
    bar.style.margin = "auto";
    bar.style.border = "2px solid black";
    if (i === 0) {
      bar.style.transform = "rotate(45deg)";
    }
    if (i === 1) {
      bar.style.transform = "rotate(-45deg)";
    }
    cross.appendChild(bar);
  }
  return cross;
}

/**
 * run : initialize a new game
 */
MyMorpionXO.prototype.run = function() {
  if (!document.querySelector('table')) {
    this.createNewTable();
  }
  var squares = document.querySelectorAll('th');
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
      this.turn(e);
    }.bind(this));
  }
}

var morpion = new MyMorpionXO();
morpion.run();