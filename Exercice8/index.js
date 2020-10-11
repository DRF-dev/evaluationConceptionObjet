'use strict';

var NavalBattle = function NavalBattle() {
  this.init = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

NavalBattle.prototype.generateMap = function() {
  var table = document.createElement('table');
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";
  for (var i = 0; i < this.init.length; i++) {
    var line = document.createElement('tr');
    for (var j = 0; j < this.init[i].length; j++) {
      var square = document.createElement('th');
      square.style.border = '1px solid black';
      square.style.width = '30px';
      square.style.height = '30px';
      square.className = this.init[i][j];
      line.appendChild(square);
    }
    table.appendChild(line);
  }
  document.body.appendChild(table);
}

var game = new NavalBattle();
game.generateMap();