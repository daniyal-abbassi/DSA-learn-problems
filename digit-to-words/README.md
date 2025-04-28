## Given a number N, the task is to convert every digit of the number into words.

Examples: 
```

    Input: N = 1234 
    Output: One Two Three Four 
    Explanation: 
    Every digit of the given number has been converted into its corresponding word.

    Input: N = 567 
    Output: Five Six Seven 
```
**Approach:** The idea is to traverse through every digit of the number and use switch-case. Since there are only ten possible values for digits, ten cases can be defined inside a switch block. For each digit, its corresponding case block will be executed and that digit will get printed in words.

## Time Complexity: O(n)