//given an integer n, return a string array"answer", where: 
//answer[i]='fizzBuzz' if i is divisible by 3 & 5.
//answer[i]='fizz' if i is divisible by 3.
//answer[i]='buzz' if i is divisible by 5.
//answer[i]=i if non is met



const fizzBuzz = (n) => {
    let i = 1;
    let answer = [];
    //while loop until reach n
    while(i<=n) {
        //conditions and push to array
        if(i%3===0 && i%5===0) {
            answer.push('FizzBuzz')
        } else if(i%3===0) {
            answer.push('Fizz')
        } else if(i%5===0) {
            answer.push('Buzz')
        } else (
            answer.push(String(i))
        )
        i++
    }
    return answer;
}

// console.log(fizzBuzz(10))
