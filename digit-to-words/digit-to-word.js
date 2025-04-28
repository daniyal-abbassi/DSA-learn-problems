//given a set of numbers, convert every digit into words.

const convertToWord = (str)=>{
    let ConvertedStr = String(str);
    for(let i=0;i<ConvertedStr.length;i++) {
        switch(ConvertedStr[i]) {
            case '1': 
                console.log('One');
                break;
            case '2': 
                console.log('Two');
                break;
            case '3':
                console.log('Three');
                break;
            case '4':
                console.log('Four');
                break;
            case '5':
                console.log('Five');
                break;
            case '6':
                console.log('Six');
                break;
            case '7':
                console.log('Seven');
                break;
            case '8':
                console.log('Eight');
                break;
            case '9':
                console.log('Nine');
                break;
           
            default: 
                console.log('Nan')
                break;
        }
    }
}


// convertToWord(12345)


//object method

function convertObj(num) {
    let strNum = String(num);
    const digits = {'1':'One','2':'Two','3':'Three','4':'Four','5':'Five','6':'Six','7':'Seven','8':'Eight','9':'Nine','0':'Zero'};
    for(let dig of strNum) {
        console.log(digits[dig])
    }
}

convertObj(1234)