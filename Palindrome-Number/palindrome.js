//given an integer x, return true if x is a palindrome, and false otherwise.

//CHALLENGE: can we solve it without converting number to a string ? 

const palindrome = (number) => {
    //convert to string
    let numStr = String(number);
    //check it reverse
    if(numStr.split('').reverse().join('') === numStr) {
        return true;
    } else {
        return false;
    }
}

// console.log(palindrome(441144))
// WITHOUT CONVERTING TO STRING

const palindromeNum = (number) => {
   //check for edge cases - non zero & negetive
    if(number < 0) {
        return false
    } 
    if ((number % 10 === 0) && (number !== 0)) {
        return false;
    }
    if(number === 0 ) {
        return true;
    }
   //initialize reverted number
    let revertedNum = 0;
    //loop until number > reverted number
    while(number > revertedNum) {
        //get the last digit 
        let lastDigit = number % 10;
        //add last digit to revertedNumber
        revertedNum = revertedNum * 10 + lastDigit;
        //remove the last digit from number
        number = Math.floor(number / 10);
    }
    //comparison - even and odd
    if((number === revertedNum) || (number === Math.floor(revertedNum / 10))) {
        return true;
    } else {
        return false;
    } 
    
}

// console.log('is 1021 a palindrome? ',palindromeNum(1021))