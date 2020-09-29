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
  table.style.margin = "30% auto";

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

var morpion = new MyMorpionXO();
morpion.createNewTable();