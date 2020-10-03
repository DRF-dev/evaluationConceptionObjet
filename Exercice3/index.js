'use strict';

/**
 * MyMorpionXO the class who contain our morpion game
 */
var MyMorpionXO = function MyMorpionXO() {
  this.round = 0;
  this.end = false;
  this.victoryPlayer1 = 0;
  this.victoryPlayer2 = 0;
}

/**
 * createNewTable : create the first or new interface to play at morpion
 */
MyMorpionXO.prototype.createNewTable = function() {
  this.numberOfVictory();

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

/**
 * turn : describe all actions who will append during this turn
 * @param {e} e : This is the event who activate this method 
 */
MyMorpionXO.prototype.turn = function(e) {
  //If the square is not a "th" or is occupated, we canceld 
  if (e.target.tagName !== "TH" || e.target.hasChildNodes() || this.end) {
    return;
  }
  this.round++;
  if (this.round % 2 === 0) {
    return e.target.appendChild(this.cross());
  }
  return e.target.appendChild(this.circle());
}
/**
 * endGame : verify if one of the player have win or not
 */
MyMorpionXO.prototype.endGame = function() {
  if (this.end) {
    return;
  }
  var squares = document.querySelectorAll('th');
  var firstLine = squares[0].childNodes[0]?.className * squares[1].childNodes[0]?.className * squares[2].childNodes[0]?.className;
  var secondLine = squares[3].childNodes[0]?.className * squares[4].childNodes[0]?.className * squares[5].childNodes[0]?.className;
  var thirdLine = squares[6].childNodes[0]?.className * squares[7].childNodes[0]?.className * squares[8].childNodes[0]?.className;
  var firstColumn = squares[0].childNodes[0]?.className * squares[3].childNodes[0]?.className * squares[6].childNodes[0]?.className;
  var secondColumn = squares[1].childNodes[0]?.className * squares[4].childNodes[0]?.className * squares[7].childNodes[0]?.className;
  var thirdColumn = squares[2].childNodes[0]?.className * squares[5].childNodes[0]?.className * squares[8].childNodes[0]?.className
  var firstDiagonal = squares[0].childNodes[0]?.className * squares[4].childNodes[0]?.className * squares[8].childNodes[0]?.className;
  var secondDiagonal = squares[2].childNodes[0]?.className * squares[4].childNodes[0]?.className * squares[6].childNodes[0]?.className;

  if (firstLine === 1 || secondLine === 1 || thirdLine === 1 ||
    firstColumn === 1 || secondColumn === 1 || thirdColumn === 1 ||
    firstDiagonal === 1 || secondDiagonal === 1) {
    this.victoryPlayer1++;
    this.messagesVictory(1);
  }
  if (firstLine === 8 || secondLine === 8 || thirdLine === 8 ||
    firstColumn === 8 || secondColumn === 8 || thirdColumn === 8 ||
    firstDiagonal === 8 || secondDiagonal === 8) {
    this.victoryPlayer2++;
    this.messagesVictory(2);
  }
}

/**
 * circle : add a circle
 */
MyMorpionXO.prototype.circle = function() {
  var circle = document.createElement('div');
  circle.className = 1;
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
  cross.className = 2;

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
 * messageVictory : show the message of vitory
 * @param {Number} player : the player 1 or the player 2
 */
MyMorpionXO.prototype.messagesVictory = function(player) {
  var messagesWin = document.createElement('span');
  var player1 = document.querySelector('.player1');
  var player2 = document.querySelector('.player2');
  messagesWin.textContent = "Felicitation joueur " + player + " , vous avez gagné !";
  player1.textContent = "Player 1 victory : " + this.victoryPlayer1;
  player2.textContent = "Player 2 victory : " + this.victoryPlayer2;
  this.end = true;
  document.body.appendChild(messagesWin);
}

/**
 * numberOfVictory : show a message with the number of victory of every players
 */
MyMorpionXO.prototype.numberOfVictory = function() {
  var grid = document.createElement('div');
  grid.style.width = "100%";
  grid.style.display = "flex";
  grid.style.margin = "2% 0";
  grid.style.justifyContent = "space-around";
  var player1victory = document.createElement('span');
  var player2victory = document.createElement('span');
  player1victory.textContent = "Player 1 victory : " + this.victoryPlayer1;
  player1victory.className = "player1";
  player2victory.textContent = "Player 2 victory : " + this.victoryPlayer2;
  player2victory.className = "player2";
  grid.appendChild(player1victory);
  grid.appendChild(player2victory);
  document.body.appendChild(grid);
}

/**
 * run : initialize a new game
 */
MyMorpionXO.prototype.run = function() {
  if (!document.querySelector('table')) {
    this.createNewTable();
  }
  var squares = document.querySelectorAll('th');
  squares.forEach(function(square) {
    square.addEventListener('click', function(e) {
      this.turn(e);
      this.endGame();
    }.bind(this));
  }.bind(this))
}

var morpion = new MyMorpionXO();
morpion.run();