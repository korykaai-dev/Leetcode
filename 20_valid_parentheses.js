/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

//My solution

/*
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let brack = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let hp = [];
    
    for (let char of s) {
        if (brack[char]){
            hp.push(brack[char])
        } else {
            if (hp.pop() !== char) return false
        }
    }
    
    return (!hp.length)
};