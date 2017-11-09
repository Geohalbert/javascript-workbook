'use strict';
var colors = require('colors');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(symbol){
    this.symbol = symbol;
  }
}



function Board() {
  this.checkers = [];
  //function to add a new checker to the board (like at the start)
  this.addChecker = function(row,column, symbol){
    let check = new Checker(symbol);
    this.grid[row][column] = check;
    this.checkers.push(check);
  }
//function that removes a checker, such as when a checker is captured
  this.remChecker = function(row,column){
    let remCheck = this.grid[row][column];
    this.grid[row][column] = null;
    let remPos = this.checkers.indexOf(remCheck);
    if (remPos >= 0) {
      this.checkers.splice(remPos,1);
    }
  }
//if we want to simply reassign a checker without removing it we use moveChecker
  this.moveChecker = function(startRow,startCol,endRow,endCol) {
    let moveCheck = this.grid[startRow][startCol];
    this.grid[startRow][startCol] = null;
    this.grid[endRow][endCol] = moveCheck;
  }
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
    this.addChecker(0,1,'O');
    this.addChecker(0,3,'O');
    this.addChecker(0,5,'O');
    this.addChecker(0,7,'O');
    this.addChecker(1,0,'O');
    this.addChecker(1,2,'O');
    this.addChecker(1,4,'O');
    this.addChecker(1,6,'O');
    this.addChecker(2,1,'O');
    this.addChecker(2,3,'O');
    this.addChecker(2,5,'O');
    this.addChecker(2,7,'O');
    this.addChecker(5,0,'X');
    this.addChecker(5,2,'X');
    this.addChecker(5,4,'X');
    this.addChecker(5,6,'X');
    this.addChecker(6,1,'X');
    this.addChecker(6,3,'X');
    this.addChecker(6,5,'X');
    this.addChecker(6,7,'X');
    this.addChecker(7,0,'X');
    this.addChecker(7,2,'X');
    this.addChecker(7,4,'X');
    this.addChecker(7,6,'X');
  };

  // prints out the board
  this.viewGrid = function() {
        // add our column numbers
      let string = "  0 1 2 3 4 5 6 7\n";
      for (let row = 0; row < 8; row++) {
        // we start with our row number in our array
        const rowOfCheckers = [row];
        // a loop within a loop
        for (let column = 0; column < 8; column++) {
          // if the location is "truthy" (contains a checker piece, in this case)
          if (this.grid[row][column]) {
            // push the symbol of the check in that location into the array
            rowOfCheckers.push(this.grid[row][column].symbol);
          } else {
            // just push in a blank space
            rowOfCheckers.push(' ');
          }
        }
        // join the rowOfCheckers array to a string, separated by a space
        string += rowOfCheckers.join('|');
        // add a 'new line'
        string += "\n";
      }
      console.log(string);
    };

  // Your code here
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
  };
// the game's moveChecker function breaks down the input from the user and applies it to the board's checker functions
  this.moveChecker = function(whichPiece,toWhere){
      let start = whichPiece.split('');
      let end = toWhere.split('');
      let startRow = start[0];
      let startCol = start[1];
      let checker = this.board.grid[startRow][startCol];
      let endRow = end[0];
      let endCol = end[1];
      let endSpace = this.board.grid[endRow][endCol];
      if (endSpace === null){
        if (Math.abs(endRow-startRow) ===1){
          this.board.moveChecker(startRow,startCol,endRow,endCol);
        } else if (Math.abs(endRow-startRow) ===2) {
          if (endRow>startRow){
            let midRow = endRow-1;
            if (endCol > startCol) {
              let midCol = endCol-1;
              this.board.moveChecker(startRow,startCol,endRow,endCol);
              this.board.remChecker(midRow,midCol);
            } else if (endCol<startCol) {
              let midCol = endCol+1;
              this.board.moveChecker(startRow,startCol,endRow,endCol);
              this.board.remChecker(midRow,midCol);
            }
          } else if (endRow<startRow){
            let midRow = endRow+1;
            if (endCol > startCol) {
              let midCol = endCol-1;
            this.board.moveChecker(startRow,startCol,endRow,endCol);
              this.board.remChecker(midRow,midCol);
            } else if (endCol<startCol) {
              let midCol = endCol+1;
              this.board.moveChecker(startRow,startCol,endRow,endCol);
              this.board.remChecker(midRow,midCol);
            }
          }
        }
      }
    }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
