/*
169. Majority Element
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

//My Solution
/*
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const vox = {};
       
       for (const num of nums) {
           vox[num] =vox[num] +1 || 1;
       }
       
       for (const key in vox) {
           if (vox[key] > Math.floor(nums.length / 2)) {
               return key;
           }
       }
   };