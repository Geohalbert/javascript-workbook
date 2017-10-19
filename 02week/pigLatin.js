'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase().trim();
  let vowels = ['a','i','o','e','u'];
  let indices = [];
  let wordLength = word.length;
  for (var i=0; i<vowels.length; ++i) {
    let vowel= vowels[i];
    if (word.indexOf(vowel) !==-1) {
      indices.push(word.indexOf(vowel));
    }
  }
  indices.sort();
  let pos = indices[0];
  if (pos === 0) {
    let latin = word.concat('yay')
    return latin;
  } else {
    let bString = word.substring(pos,wordLength);
    let aString = word.substring(0,pos);
    let latin = bString.concat(aString+ 'ay');
    return latin;
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
