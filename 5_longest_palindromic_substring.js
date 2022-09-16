/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/

//My solution
/**
 * @param {string} s
 * @return {string}
 */
 const getDro = (left, right, s) => {
  while(left >= 0 && right < s.length) {
      if(s[left] !== s[right]) break;
      left--;
      right++;
  }
  return [left + 1, right]
}

var longestPalindrome = function(s) {
  let max = [0, 1];
  
  for(let i = 0; i < s.length; i++) {
      let even = getDro(i - 1, i, s);
      let odd = getDro(i - 1, i + 1, s);
      let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      
      max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }
  return s.slice(max[0], max[1]);
};

/**
 * We iterate through the string, and for each character, we check if it's the center of a palindrome.
 * If it is, we expand the palindrome as far as we can, and update the max palindrome if necessary
 * @param left - the left index of the palindrome
 * @param right - the right pointer, which is the right boundary of the palindrome
 * @param s - the string we're checking
 * @returns The longest palindrome in the string.
 */