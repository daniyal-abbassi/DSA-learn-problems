### Given a number n, find the sum of its digits.

Examples : 
```
    Input: n = 687
    Output: 21
    Explanation: The sum of its digits are: 6 + 8 + 7 = 21

    Input: n = 12
    Output: 3
    Explanation: The sum of its digits are: 1 + 2 = 3
```

## Iterative Approach

**The idea is to add the digits starting from the rightmost (least significant) digit and moving towards the leftmost (most significant) digit. This can be done by repeatedly extracting the last digit from the number using modulo 10 operation, adding it to the sum, and then removing it using integer division by 10. For eg: n = 1567, then 1567 / 10 = 156.7 = 156(Integer Division).**


**Time Complexity:** O(log10n), as we are iterating over **all the digits.**
 