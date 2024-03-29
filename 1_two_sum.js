/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

//My Solution
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 var twoSum = function(nums, target) {
    
    for (var i = 0; i < nums.length; i++) {
        for (var k = i + 1; k < nums.length; k++) {
             if (nums[i] + nums[k] === target) {
                 return [i, k];
             }
         }
     }
     
 };
 /* The above code is a function that takes in two parameters, nums and target. The function then loops
 through the nums array and checks if the sum of two numbers in the array is equal to the target. If
 the sum of two numbers is equal to the target, the function returns the index of the two numbers. */