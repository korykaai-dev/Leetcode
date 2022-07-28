/*

101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

*/

//My Solution

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    
    function repChk(l, r) {
        if (!l && !r) return true;
        
        else if (!l || !r || l.val !== r.val) return false;
        
        return repChk (l.left, r.right) && repChk (l.right, r.left);
    }
    return repChk(root.left, root.right);
};

//Results
/* 
Success
Details 
Runtime: 68 ms, faster than 96.35% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 44.7 MB, less than 35.36% of JavaScript online submissions for Symmetric Tree
*/