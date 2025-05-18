//given a number n, find sum of digits

//input as an Array
const sum = (arr) => {
    let sum = 0;
    for(let i = 0;i<arr.length;i++) {
        sum += arr[i]
    }
    console.log('the sum is: ',sum)
}

// sum([6,8,7])

//INPUT AS NUMBER - CALCULATE AS STRING (INPUT AS STRING)

const sumStr = (num) => {
    let sum = 0;
    let numStr = String(num)
    for(let i =0;i<numStr.length;i++) {
        sum += parseInt(numStr[i])    
    }
    console.log('the sum is: ',sum)
}

// sumStr(687)

//INPUT AS DIRECT NUMBER
// "/" turn the last number as float .lastNumber
// "%" gives off the last number

const sumNumber = (num) => {
    let sum = 0;
    while(num !==0) {
        //get the last digit
        let last = num % 10;
        //add to sum
        sum += last
        
        //remove the last number
        num = Math.floor(num / 10)
        console.log('last: ',last,' num: ',num)
    }
    return sum;
}

// console.log(sumNumber(12345))

