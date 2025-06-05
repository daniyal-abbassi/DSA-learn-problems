//given an integer n , find the absolute difference between sum of the squares of first n natural numbers and square of sum of first n natural numbers.
//for example: n => 3
// sum of the squares of n natural numbers => 3 + 2 + 1 = 6  => square of sum = 36
// sum of squares of numbers => 9 + 4 + 1 = 14
//what we want is: 36 - 14


const diffSquares = (number) => {
    let sum = number;
    let sqr = Math.pow(number,2);
    let sumSqr = sqr;
    while(number > 0) {
        sum += (number - 1)
        sumSqr += (Math.pow((number -1), 2))
        number --;
    }
    return Math.abs(Math.pow(sum,2) - sumSqr)
}

// console.log(diffSquares(10))

