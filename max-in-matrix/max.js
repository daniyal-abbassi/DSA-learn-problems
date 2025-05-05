//given a NxM matrix, the task is to find maximumm element of matrix

let matrix = [[1, 2, 3, 4],
[25, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
]

const findMax = (matrix) => {
    let max = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let temp = matrix[i][j];
            if(temp > max) {
                max = temp;
            }
        }
    }
    return max;
}

console.log(findMax(matrix))