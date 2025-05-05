## Given an NxM matrix. The task is to find the maximum element in this matrix.

Examples: 
```
Input: mat[4][4] = {{1, 2, 3, 4},
                    {25, 6, 7, 8},
                    {9, 10, 11, 12},
                    {13, 14, 15, 16}};
Output: 25

Input: mat[3][4] = {{9, 8, 7, 6},
                    {5, 4, 3, 2},
                    {1, 0, 12, 45}};
Output: 45
```

**Approach: The idea is to traverse the matrix using two nested loops, one for rows and one for columns, and find the maximum element. Initialize a variable maxElement with a minimum value and traverse the matrix and compare every time if the current element is greater than a maxElement. If yes then update maxElement with the current element.**