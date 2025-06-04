//given a roman numeral symbols, convert it to an iteger.

let romanNumbers = [
    { 'I': 1 },
    { 'V': 5 },
    { 'X': 10 },
    { 'L': 50 },
    { 'C': 100 },
    { 'D': 500 },
    { 'M': 1000 }
]

//OBJECT APPROACH
let romanToInt = (s) => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    //declare totla and i (index)
    let total = 0;
    let i = 0;
    //while loop untill there is no next character => i+1 > s.length
    while(i < s.length) {

        //get currentValue
        let currentValue = romanMap[s[i]];
        //if i+1 < s.length - still a next value
        if(i+1 < s.length) {

            //get the next value
            let nextValue = romanMap[s[i+1]];   
            //check if next value is greater then current value
            if(currentValue < nextValue) {

                //subtract first and then add to total
                total += (nextValue - currentValue);
                //increment the i 
                i += 2;   
            } else {
                //if next value is less then current value
                //add it to total
                total += currentValue;
                i += 1;
            }
            
            
        } else {
            //if there is no next value
            //just add to total
            total += currentValue;
            i += 1;
        }   
    }
        //return total
    return total;
}

// console.log(romanToInt("MCMXCIV"))

//RIGHT TO LEFT APPROACH

var romanToInt2 = function(s) {
    //right to left
    const romanMap = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000
   };
   //decalre totla and previusValue
   let total = 0;
   let prevValue = 0;
   //loop through string
   for(let i = s.length-1;i>=0;i--) {

   //get current value
   let currentValue = romanMap[s[i]]
   //if prev is less then current - subtract
   if(prevValue>currentValue) {
       total -= currentValue
   } else {
   //if not - add it
   total += currentValue
   }
   prevValue = currentValue
   //set prev to current for next itration
   }
   //return the total
   return total;
};