'use strict';

/**
 * The naval battle game
 */
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

/**
 * Generate a map of naval battle
 */
NavalBattle.prototype.generateMap = function() {
  var table = document.createElement('table');
  table.style.borderCollapse = "collapse";
  for (var i = 0; i < this.init.length; i++) {
    var line = document.createElement('tr');
    for (var j = 0; j < this.init[i].length; j++) {
      var square = document.createElement('th');
      square.style.border = '1px solid black';
      square.style.width = '30px';
      square.style.height = '30px';
      square.className = this.init[i][j];
      square.addEventListener('click', function(e) {
        this.haveBoat(e);
      }.bind(this));
      line.appendChild(square);
    }
    table.appendChild(line);
  }
  document.body.appendChild(table);
}

/**
 * Generate a boat on the list
 * @param {string} textContent the name of the boat
 * @param {string} className the className of the element
 */
NavalBattle.prototype.generateBoat = function(textContent, className) {
  var element = document.createElement('li');
  element.textContent = textContent;
  element.className = className;
  return element;
}

/**
 * Generate the list of all boats
 */
NavalBattle.prototype.generateName = function() {
  var list = document.createElement('ul');
  var listElement = {
    'boat1': this.generateBoat('Chaloupe', 'chaloupe'),
    'boat2': this.generateBoat('Barque', 'barque'),
    'boat3': this.generateBoat('Navire', 'navire'),
    'boat4': this.generateBoat('Porte-avion CDG', 'porteAvion'),
    'boat5': this.generateBoat('Sous-marin nucléaire', 'sousMarin')
  }

  for (const key in listElement) {
    list.appendChild(listElement[key]);
  }
  document.body.appendChild(list);
}

/**
 * Verify if the square have a boat or not
 * @param {Event} e the event that call this method
 */
NavalBattle.prototype.haveBoat = function(e) {
  if (Number(e.target.className) > 0) {
    return e.target.style.backgroundColor = 'red';
  }
  e.target.style.backgroundColor = 'blue';
}

NavalBattle.prototype.fixPositions = function() {
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';
}

var game = new NavalBattle();
game.fixPositions();
game.generateMap();
game.generateName();