'use strict';

/**
 * check if the word or the sentence are a palindrom
 * @param {string} str a word or a sentence (remove the whitespace at the began and the end)
 */
var CheckPalindrome = function CheckPalindrome(str) {
  this.str = str.trim();
}

/**
 * Check if we have a palindrome
 * @param {boolean} isUniqueWord true if it is a unique word or false if it is a sentence
 */
CheckPalindrome.prototype.isPalindrome = function(isUniqueWord) {
  var lowerStr = this.str.toLowerCase();
  var arrayStr = isUniqueWord? lowerStr.split('') : lowerStr.split(' ');
  var backwards = '';
  for (var i = arrayStr.length - 1; i >= 0; i--) {
    backwards += arrayStr[i] + (isUniqueWord || i === 0? '' : ' ');
  }
  return backwards === lowerStr;
}

/**
 * Detect if str is a word or a sentence
 */
CheckPalindrome.prototype.checkIsPalindrome = function() {
  if (this.str.split(' ').length > 1) {
    return this.isPalindrome(false);
  }
  return this.isPalindrome(true);
}

/**
 * Run our app
 */
CheckPalindrome.prototype.run = function() {
  var textHtml = {
    'str': document.createElement('p'),
    'isPalindrome': document.createElement('span')
  }

  textHtml['str'].textContent = (this.str.split(' ').length > 1? 'La phrase':'Le mot') + ' a vérifier si il s\'agit d\'un palindrome est : ' + this.str;
  textHtml['isPalindrome'].textContent = (this.checkIsPalindrome()? 'C\'est ':'Ce n\'est pas ') + 'un palindrome';

  for (const key in textHtml) {
    document.body.appendChild(textHtml[key])
  }
}

var newPalindrome = new CheckPalindrome('Ceci est ceci');
newPalindrome.run();