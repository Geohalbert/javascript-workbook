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

// prints board
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}
// randomly generates a solution
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  return solution;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// takes guess from user and returns a hint
function generateHint(guess) {
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  for (var i=0; i<4; i++){
    let sol = solutionArray[i];
    let gue= guessArray[i];
// if the guess has the correct letter at the index "i" the letter within the solutionArray is replaced with null and the count for correct letters (correctLetterLocations) is increased 1
    if (sol === gue) {
      correctLetterLocations++
      solutionArray.splice(i, 1, null);
    }
  }
  var correctLetters = 0;
  for (var n=0; n<4; n++) {
    let gue2 = guessArray[n];
    for (var m=0; m<4; m++) {
      let sol2 = solutionArray[m];
      if (gue2 === sol2){
// if a letter within the guess at index "m" exists within the solution but is NOT in the correct location the letter within the solutionArray is replaced with null and the count for correct letters (correctLetters) is increased 1
        var targetIndex = m;
        correctLetters++;
        solutionArray.splice(targetIndex, 1, null);
      }
    }
// if the guess has the exact solution the correctLetterLocations will equal 4, returning a true value to the mastermind function
  }if (correctLetterLocations === 4) {
    return true;
// if the board length equals 9 then the user has guessed 10 times, returning a true value to the mastermind function
  }else if (board.length === 9){
    return false;
  }else {
// letters correctly guessed in the right location will display in red while the incorrect locations will be white
    var corLetLoc = (String(correctLetterLocations).red);
    var corLets = (String(correctLetters).white);
    var guessReturn = corLetLoc+"-"+corLets;
    return guessReturn;
  }
}

function mastermind(guess) {
  var hint = generateHint(guess);
  board.push(String(guess+' '+hint));
  if (hint === true){
    return "You guessed it!";
  }else if (hint === false) {
    return false;
    process.exit();
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    let x= mastermind(guess);
    if (x === "You guessed it!") {
      console.log("You guessed it!");
      process.exit();
    }else if (x === false) {
      console.log('You ran out of turns! The solution was '+solution);
      process.exit();
    }else {
      console.log('Guesses left: '+(10-board.length));
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
      let expected = ("2".red)+"-"+("2".white);
      assert.equal(generateHint('abdc'), expected);
    });
    it('should generate hints if solution has duplicates', () => {
      let expected = ("1".red)+"-"+("1".white);
      assert.equal(generateHint('aabb'), expected);
    });

  });

} else {

  generateSolution();
  getPrompt();
}
