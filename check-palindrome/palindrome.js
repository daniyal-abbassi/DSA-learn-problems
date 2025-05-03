//given an integer,find whether the number is palindrome or not.

const checkPalindrome = (numbers) => {
    let numStr = String(numbers);
    let originalNum = numStr.split('').join('');
    let revereseNum = numStr.split('').reverse().join('');  
    if ( originalNum === revereseNum ) { 
        console.log('is palindrome') }
    else { 
        console.log('is not palindrome') }

}
checkPalindrome(12321)