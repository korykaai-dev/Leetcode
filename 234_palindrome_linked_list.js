/*
234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

//My Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
 
    let rapid = head;
    let slowed = head;
        
        while (rapid && rapid.next) {
            slowed = slowed.next;
            rapid = rapid.next.next;
        }
        
        rapid = head;
        slowed = reverse(slowed);
        
        while(slowed) {
            if (rapid.val !== slowed.val) {
                return false;
            }
            slowed = slowed.next;
            rapid = rapid.next;
        
        }
        return true;
    };
    function reverse(root) {
        let previous = null;
        
        while(root){
            let ref = root.next;
            root.next = previous;
            previous = root;
            root = ref;
        }
        return previous;
    }

//results
/*
Success
Details 
Runtime: 234 ms, faster than 42.57% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 69.8 MB, less than 76.04% of JavaScript online submissions for Palindrome Linked List.
*/