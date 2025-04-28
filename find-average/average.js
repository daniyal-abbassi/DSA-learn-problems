//given an array, fine average of that array.

const numbers = [1,2,3,4,5];

const findAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length;i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

const arrAverage = findAverage(numbers);
// console.log('the average of ',numbers, '  is : ',arrAverage)

//with reduce method

const reduceArr = numbers.reduce((acc,current)=>acc+current);
console.log('avg is: ',reduceArr/numbers.length)