'use strict';
var colors = require('colors');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  // let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  return solution;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  for (var i=0; i<4; i++){
    let sol = solutionArray[i];
    let gue= guessArray[i];
    if (sol === gue) {
      correctLetterLocations++
      // console.log("correctLetterLocations added 1 for letter "+gue+": "+correctLetterLocations+" at index "+i);
      solutionArray.splice(i, 1, null);
      // console.log('solutionArray after correct location: '+solutionArray);
    }
  }
  // console.log("final correctLetterLocations: "+correctLetterLocations+" new solution array: "+solutionArray);
  var correctLetters = 0;
  for (var n=0; n<4; n++) {
    // console.log('sol2: '+sol2);
    let gue2 = guessArray[n];
    for (var m=0; m<4; m++) {
      let sol2 = solutionArray[m];
      if (gue2 === sol2){
        var targetIndex = m;
        // console.log('targetIndex: '+targetIndex+", solution: "+solution);
        correctLetters++;
        solutionArray.splice(targetIndex, 1, null);
        // console.log('solutionArray after targetIndex: '+solutionArray);
      }
    }
  }if (correctLetterLocations === 4) {
    return true;
  }else if (board.length === 9){
    return false;
  }else {
    var corLetLoc = (String(correctLetterLocations).red);
    var corLets = (String(correctLetters).white);
    var guessReturn = corLetLoc+"-"+corLets;
    // console.log('guessReturn: '+guessReturn);
    // console.log('solution: '+solution);
    return guessReturn;
  }
}

function mastermind(guess) {
  var hint = generateHint(guess);
  board.push(String(guess+' '+hint));
  if (hint === true){
    return true;
  }else if (hint === false) {
    return false;
    process.exit();
  }
}
// generateHint('abcd', 'ebfc')

function getPrompt() {
  rl.question('guess: ', (guess) => {
    // mastermind(guess);
    let x= mastermind(guess);
    if (x === true) {
      console.log("You guessed it!");
      process.exit();
    }else if (x === false) {
      console.log('You ran out of turns! The solution was '+solution);
      process.exit();
    }else {
      console.log('Guess again. Guesses left: '+(10-board.length));
    }
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
