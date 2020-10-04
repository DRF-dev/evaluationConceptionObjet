'use strict';

/**
 * MyMorpionXO the class who contain our morpion game
 */
var MyMorpionXO = function MyMorpionXO() {
  this.round = 0;
  this.end = false;
  this.victoryPlayer1 = 0;
  this.victoryPlayer2 = 0;
  this.draw = 0;
  this.numberGames = 0;
}

/**
 * createNewTable : create a table to play
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
  this.whoIsPlaying();
}

/**
 * turn : describe all actions that will append during this turn
 * @param {Event} e : This is the event that activate this method 
 */
MyMorpionXO.prototype.turn = function(e) {
  if (e.target.tagName !== "TH" || e.target.hasChildNodes() || this.end) {
    return;
  }
  this.round++;
  this.whoIsPlaying();
  if (this.round % 2 === 0) {
    return e.target.appendChild(this.cross());
  }
  return e.target.appendChild(this.circle());
}
/**
 * isEndGame : verify if one of the player has won
 */
MyMorpionXO.prototype.isEndGame = function() {
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

  //If one of the square has no child, the game continue, else it is a draw
  for (var i = 0; i < squares.length; i++) {
    if (!squares[i].hasChildNodes()) {
      return;
    }
  }

  this.draw++;
  this.messagesVictory();  
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

MyMorpionXO.prototype.whoIsPlaying = function() {
  var playerIsPlaying;
  if (!document.querySelector('.whoIsPlaying')) {
    playerIsPlaying = document.createElement('p');
    this.round % 2 === 0 ? playerIsPlaying.textContent = "C'est le tour des cercles (J1)" : playerIsPlaying.textContent = "C'est le tour des croix (J2)";
    playerIsPlaying.className = "whoIsPlaying";
    return document.body.appendChild(playerIsPlaying);
  }
  playerIsPlaying = document.querySelector('.whoIsPlaying');
  return this.round % 2 === 0 ? playerIsPlaying.textContent = "C'est le tour des cercles (J1)" : playerIsPlaying.textContent = "C'est le tour des croix (J2)";
}

/**
 * messageVictory : show the message of victory
 * @param {Number} player : the player 1 or the player 2
 */
MyMorpionXO.prototype.messagesVictory = function(player) {
  this.end = true;
  var messagesWin = document.createElement('span');
  var player1 = document.querySelector('.player1');
  var player2 = document.querySelector('.player2');
  var draw = document.querySelector('.draw');
  var buttonNewGame = document.createElement('button');
  player? messagesWin.textContent = "Felicitation joueur " + player + " , vous avez gagné !" : messagesWin.textContent = "C'est une égalité :( ";
  player1.textContent = "Player 1 victory : " + this.victoryPlayer1;
  player2.textContent = "Player 2 victory : " + this.victoryPlayer2;
  draw.textContent = "Number of draw : " + this.draw;
  buttonNewGame.textContent = "New game ?";
  buttonNewGame.addEventListener('click', function() {
    document.body.innerHTML = "";
    this.end = false;
    this.run();
  }.bind(this));
  document.body.appendChild(messagesWin);
  document.body.appendChild(buttonNewGame);
}

/**
 * numberOfVictory : shows a message with the number of victory of each players
 */
MyMorpionXO.prototype.numberOfVictory = function() {
  var grid = document.createElement('div');
  var numberOfGame = document.createElement('span');
  var player1victory = document.createElement('span');
  var player2victory = document.createElement('span');
  var draw = document.createElement('span');
  this.numberGames++;
  grid.style.width = "100%";
  grid.style.display = "flex";
  grid.style.margin = "2% 0";
  grid.style.justifyContent = "space-around";
  player1victory.textContent = "Player 1 victory : " + this.victoryPlayer1;
  player1victory.className = "player1";
  player2victory.textContent = "Player 2 victory : " + this.victoryPlayer2;
  player2victory.className = "player2";
  draw.textContent = "Number of draw : " + this.draw;
  draw.className = "draw";
  numberOfGame.textContent = "Number of game : " + this.numberGames; 
  grid.appendChild(player1victory);
  grid.appendChild(player2victory);
  grid.appendChild(draw);
  grid.appendChild(numberOfGame);
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
      this.isEndGame();
    }.bind(this));
  }.bind(this))
}

var morpion = new MyMorpionXO();
morpion.run();