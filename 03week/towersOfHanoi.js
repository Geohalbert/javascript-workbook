'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// object containing stack info
let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};

// prints the current board
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
// moves the disc from startStack to endStack
function movePiece(startStack, endStack) {
  let stack1 = stacks[startStack];
  let stack2 = stacks[endStack];
  let takeDisc = stack1.pop();
  let dropDisc = stack2.push(takeDisc);
}

function isLegal(startStack, endStack) {
  let stack1 = stacks[startStack];
  let stack2 = stacks[endStack];
// if there are discs in both stacks:
  if (stack1.length != 0 && stack2.length != 0 ) {
    let startTopDisc = stack1[(stack1.length)-1];
    let endTopDisc = stack2[(stack2.length)-1];
// if the disc in endStack is bigger than the top disc in startStack
    if (startTopDisc < endTopDisc) {
      return true;
    }else {
      return false;
    }
// if there are discs in startStack but none in endStack
  }else if (stack1.length != 0 && stack2.length == 0) {
    return true;
  }else {
    return false;
  }
}

// if there are 4 discs in the last stack (c) then the player wins and ends the game
function checkForWin() {
  if (stacks.c.length == 4) {
    return true;
  }else {
    return false;
  }
}

// the player inputs letters "a", "b" or "c" to move discs from startStack to endStack
function towersOfHanoi(startStack, endStack) {
// first the function uses isLegal function to check for legal movie
  let x = isLegal(startStack, endStack)
  if (x == true) {
// if move is legal, function movePiece removes the top disc (last element in the array) from startStack to and places it (appends the last element) in endStack
    movePiece(startStack, endStack);
    let y = checkForWin();
    if (y == true) {
// after moving the disc, function checkForWin looks to see if 4 discs are in the last stack "c"
      printStacks();
      console.log("You win! Game over.")
      process.exit();
    }
  } else {
    console.log("Invalid move!")
  }
}


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
