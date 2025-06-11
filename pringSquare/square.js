//given an integer n, print a square with n signs * 


const square = (n) => {
    for(let i =1;i<=n;i++) {
        if(i!==1 && i !== n) console.log(`*${' '.repeat(n-2)}*`)
         else console.log('*'.repeat(n))
    }
}

square(6)