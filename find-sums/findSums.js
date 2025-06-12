//given a list of numbers and a target number, find numbers that add-up together and equals with target.
// NUMBERS SHOULD BE UNIQUE =>  [2,5,2,2,1] ?5 => ONLY ONE COMBINATION => 2,2,1

const numbers = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

//STACK APPROACH
const findCombinations = (candidates, target) => {
    //sort the array
    candidates.sort((a, b) => a - b)
    //create a stack - combo(so far), remaining(sum needed) and start index
    const results = [];
    const stack = [
        {
            combo: [],
            remaining: target,
            startIndex: 0
        }
    ]
    //start a loop
    while (stack.length > 0) {

        //get the current stack
        const { combo, remaining, startIndex } = stack.pop();
        //check if ramining is 0
        if (remaining === 0) {
            results.push(combo);
            continue
        }
        //check if remaining is negetive
        if (remaining < 0) {
            continue
        }

        //go through next elements if candidates - for loop
        for (let i = startIndex; i < candidates.length; i++) {

            //check for duplicates
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue
            }
            //get the current number
            const curNumber = candidates[i];
            //check current number if bigger then remaining
            if (remaining - curNumber < 0) {
                break;
            }
            //add new stack to our main stack
            stack.push({
                combo: [...combo, curNumber],
                remaining: remaining - curNumber,
                startIndex: i + 1
            })
        }
    }
    if (results.length === 0) {
        console.log("0");
    } else {
        results.forEach(combination => {
            console.log(combination.join(' '));
        });
    }
}

findCombinations(numbers,target)

