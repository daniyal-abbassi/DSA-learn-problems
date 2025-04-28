//given an array, count the number of even and odd elements, return first odd count and then even count.
const numbers = [2, 6, 45, 12, 0, 21, 10, 35];

const countOddEven = (array) => {
    let oddCount=0;
    let evenCount=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2===0) {
            evenCount++
        } else  {
            oddCount++
        }
    }
    return [oddCount,evenCount]
}
const counterLoop = countOddEven(numbers);
console.log(counterLoop[0],counterLoop[1])

//with map method
function countElements(numbers) {
    let odd = 0;
    let even = 0;
    numbers.map((number)=>{
        if(number%2===0) even++
        else odd++
    })
    console.log('odd count: ',odd)
    console.log('even count: ',even)
}
countElements(numbers)

//time complexity for both: O(n)