//givin a number, check if it is divisible by 6.
//A number is divisible by 6 it's divisible by 2 and 3. 
//a)  A number is divisible by 2 if its last digit is divisible by 2.
//b)  A number is divisible by 3 if sum of digits is divisible by 3.
const checkDivisible = (num) => {
    //convert to str
    let strNum = String(num);
    //get the last digit
    let lastDigit = strNum[strNum.length-1];
    //check divisible by 2
    if(Number(lastDigit)%2===0) {
        console.log(`last digit: ${lastDigit} divisible by 2`);
        //check if sum of digits is divisible by 3.
        let sum = 0;
        for(let i of strNum) {
            sum += Number(i);
        }
        if(sum%3===0) {
            console.log(`sum of all digits: ${sum} is divisible by 3.`)
            console.log(`${strNum} is divisible by 2 and 3, so as 6.`)
        } else {
            console.log(`sum of all digits: ${sum} IS NOT divisible by 3.`)
            console.log(`${strNum} is divisible by 2 BUT NOT BY 3, so IS NOT BY 6.`)
        }
    } else {
        console.log(`last digit: ${lastDigit} IS NOT divisible by 2`)
    }
    
}

checkDivisible(363588395960667043875487)