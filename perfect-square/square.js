//given a number, check if it is perfect square

const isSquare = (num) => {
    if(num >=0) {
        let sqr = Math.sqrt(num)
        if(sqr * sqr === num) {
            console.log(`${num} perfet square is: ${sqr}`)
        } else {
            console.log(`${num} has no perfet square.`)
        }
    } else {
        console.log('number should be grater then 0.')
    }
}

isSquare(26)