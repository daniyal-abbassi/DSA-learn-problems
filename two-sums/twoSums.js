//given an array of integers and a target number, return indices of two numbers that add up and equals to target

let numbs = [11, 15, 2, 7];
let target = 9;
//FIRST SOLUTIONS
const twoSum = (nums, target) => {
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            // console.log(`${[i,i+1]}`)
            result.push(i);
            result.push(i + 1)
        }
    }
    return result;
}
// console.log(twoSum(numbs,target))
//this solution works but only for adjacent elements!! but The problem requires you to find any two numbers in the array that sum up to the target, not just ones next to each other.

//BRUTE FORCE METHOD
const twoSumBrutoForce = (nums, target) => {
    let res = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let remainNum = Math.abs(target - nums[i]);
        // console.log(`target needing number is: ${remainNum}`)
        for (let j = i; j < nums.length - 1; j++) {
            if (remainNum + nums[j] === target) {
                // console.log(`found the number: ${nums[j]}`)
                if (!res.includes(i)) {
                    res.push(i)
                }
                if (!res.includes(j)) {
                    res.push(j)
                }

            }
        }
    }
    return res;
}
// console.log(twoSumBrutoForce(numbs,target))
//BRUTW FORCE FORMATTED METHOD

const twoSumBrut = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    //safty net for situations where thre is no returns found!! defensive programming
    return [];
}

// console.log(twoSumBrut(numbs,target))
//TWO POINTERS APPROACH

const twoSumPointers = (nums, target) => {
    //because we need the original indices
    //create an array of objects: {value,index}
    let arrayOfObjects = [];
    for (let i = 0; i < nums.length; i++) {
        arrayOfObjects.push({ value: nums[i], index: i })
    }
    // console.log(arrayOfObjects)
    //sort the array
    arrayOfObjects.sort((a, b) => a.value - b.value)
    // console.log(arrayOfObjects)

    //initialize two pointers left most and right most
    let left = 0;
    let right = arrayOfObjects.length - 1;
    //loop through array untill left=right
    while (left < right) {

        //get the sum of current indices
        let currentSum = arrayOfObjects[left].value + arrayOfObjects[right].value;
        //check for result
        if (currentSum === target) {
            return [arrayOfObjects[left].index, arrayOfObjects[right].index]
        } else if (currentSum < target) {
            //move the left one to the right ++
            left++;
        } else {
            //if sum>target
            //move the right one to the left --
            right--;
        }
    }
    //safty net - defensive programming
    return [];
}

// console.log(twoSumPointers(numbs, target))

//USING A HASHMAP APPROACH {}

const twoSumsHash = (nums, target) => {
    //initialize an empty hashmap - object
    let map = {};
    //loop through each element
    for (let i = 0; i < nums.length; i++) {

        //get the complement of each element for target
        let complement = target - nums[i]
        //get current number
        let currentNum = nums[i];
        //check for existing complement in map
        if (map[complement]) {
            return [map[complement],i]
        }
        map[currentNum] = i;
    }

    //safty net - defensive programming
    return []
}
// console.log(twoSumsHash(numbs, target))

//USING MAP() - FIRST TIME

const twoSumMap = (nums,target) => {
    //create new map
    let map = new Map()
    //loop throgh each element
    for(let i = 0;i<nums.length;i++) {

        //get the currentNumber 
        let currentNum = nums[i];
        //get the complement
        let complement = target - currentNum;
        //check for existing in map
        if(map.has(complement)) {
            return [map.get(complement),i]
        }
        //add to map - if not already in there
        map.set(currentNum,i)
    }

    //safty net - defensive programming
    return [];
}

// console.log(twoSumMap(numbs,target))