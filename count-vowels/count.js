//given a string, count the total number of vowels

const countVowels = (str) => {
    let vowels = ['a','o','e','i','u'];
    let vowelsNum = 0;
    for(let i=0;i<str.length;i++) {
        if(vowels.includes(str[i])) {
            vowelsNum++
        }
    }
    return vowelsNum;
}

console.log(countVowels('geeksforgeeks portal'))