'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', 'X', ' '],
  ['O', ' ', ' '],
  [' ', 'X', ' ']
];




  // if (playerTurn === 'X'){
  //   playerTurn === 'O';
  //   return playerTurn;
  // }else if (playerTurn === 'O') {
  //   playerTurn === 'X';
  //   return playerTurn;
  // }
  // turn === turn+1;
  //   if (turn%2 === 0) {
  //     playerTurn === 'X';
  //     return playerTurn;
  //   }else if (turn%2 === 1) {
  //     playerTurn === '0';
  //     return playerTurn;
  //   }



function printBoard() {
  let playerTurn, sum, total;
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
// let playerTurn = 'X';


function horizontalWin() {
  for (var r=0; r<3; r++) {
    let line = board[r];
    if ((line[0] === line[1] && line[1] === line[2]) && (line[0] === 'X' || line[0] === 'O')) {
      return true;
      }
    }
  };


function verticalWin() {
  for (var c=0; c<3; c++) {
    let line = [];
    for (var r=0; r<3; r++){
      line.push(board[r][c]);
    }if ((line[0] === line[1] && line[1] === line[2]) && (line[0] === 'X' || line[0] === 'O')) {
      return true;
      }
    }
  };

function diagonalWin() {
  if ((board[0][0] === 'X' || board[0][0] === 'O') && ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]))) {
    return true;
  }else if ((board[0][2] === 'X' || board[0][2] === 'O') && ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]))) {
    return true;
  }
};

function checkForWin() {
  if (horizontalWin() == true) {
    return true;
  }else if (verticalWin() == true) {
    return true;
  }else if (diagonalWin() == true) {
    return true;
  }
}
function turns(){
  let playerTurn = 'X';
  let sum = [];
  let total = sum.length
  for (var r=0; r<3; r++) {
    for (var c=0; c<3; c++){
      // console.log('(board['+r+']['+c+']): ' +(board[r][c]));
      if ((board[r][c]) === 'X' || (board[r][c]) === 'O') {
        sum.push(1);
      }
    }
  }
  if (total%2 === 0) {
    playerTurn = 'X';
  }else if (total%2 === 1) {
    playerTurn = 'O';
  }console.log('playerTurn at end of turns(): '+playerTurn);
}

function ticTacToe(row,column) {
  row === parseInt(row);
  console.log(row);
  column === parseInt(column);
  console.log(column);
  console.log('board[row][column]: '+board[row][column]);
  if (board[row][column] !== 'X' && board[row][column] !== 'O') {
    board[row][column] == playerTurn;
  }
}

function getPrompt() {
  // let playerTurn;
  printBoard();
  turns();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row,column);
      checkForWin();
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
