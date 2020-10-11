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
    backwards += arrayStr[i]
  }
  return backwards === lowerStr;
}

CheckPalindrome.prototype.checkIsPalindrome = function() {
  if (this.str.split(' ').length > 1) {
    return this.isPalindrome(false);
  }
  return this.isPalindrome(true);
}

var newPalindrome = new CheckPalindrome('kayaks');
console.log(newPalindrome.checkIsPalindrome());