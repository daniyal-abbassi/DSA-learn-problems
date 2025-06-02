### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

**You may assume that each input would have exactly one solution, and you may not use the same element twice.**

**You can return the answer in any order.**

 
```
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
```

- Brute force -->O(n2)
simply check if ith element is making a pair with any of the other element on
the right side

- Using Two Pointer approach-->O(n log n )
time complexity is nlogn because in this approach, the array will be first sorted and then , two pointer approach will be used

- Using HashMap -->O(n)
keep on storing the elements that we reach , also keep on check if target-element is already present in the hashmap or not , if it is , then we found a pair