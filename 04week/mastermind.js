'use strict';
var colors = require('colors');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  for (var i=0; i<4; i++){
    let sol = solutionArray[i];
    let gue= guessArray[i];
    if (sol == gue) {
      correctLetterLocations++
      console.log("correctLetterLocations added 1 for letter "+gue+": "+correctLetterLocations+" at index "+i);
      solutionArray.splice(i, 1, null);
    }
  }console.log("final correctLetterLocations: "+correctLetterLocations+" new solution array: "+solutionArray);
  var correctLetters = 0;
  for (var n=0; n<4; n++) {
    let gue2 = guessArray[n];
    if (solutionArray.indexOf(gue2) > -1) {
      var targetIndex = solutionArray.indexOf(gue2);
      console.log('targetIndex: '+targetIndex);
      correctLetters++;
      solutionArray.splice(targetIndex, 1, null);
    }
  }console.log("final correctLetters: "+correctLetters+" new solution array: "+solutionArray);
  // return console.log(colors.red(%s)+" - " +colors.white() correctLetterLocations.red+" - "+correctLetters.white);
}

function mastermind(guess) {
  // your code here
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
