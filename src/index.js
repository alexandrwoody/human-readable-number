module.exports = function toReadable(number) {
    const numbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }
    let result = "";
    const arrayOfNumber = Array.from(String(number), Number);
    let dec = number % 100;
    let dig = dec % 10;
    function decCount(dec) {
        if (dec === 0) {
            result = "";

        }
        if (dec <= 20) {
            result = `${numbers[dec]}`

        }
        else if (dec >= 20 && dec < 30) {
            result = `${numbers[20]} ${numbers[dig]}`

        }
        else if (dec >= 30 && dec < 40) {
            result = `${numbers[30]} ${numbers[dig]}`

        }
        else if (dec >= 40 && dec < 50) {
            result = `${numbers[40]} ${numbers[dig]}`

        }
        else if (dec >= 50 && dec < 60) {
            result = `${numbers[50]} ${numbers[dig]}`

        }
        else if (dec >= 60 && dec < 70) {
            result = `${numbers[60]} ${numbers[dig]}`

        }
        else if (dec >= 70 && dec < 80) {
            result = `${numbers[70]} ${numbers[dig]}`

        }
        else if (dec >= 80 && dec < 90) {
            result = `${numbers[80]} ${numbers[dig]}`

        }
        else if (dec >= 90 && dec < 100) {
            result = `${numbers[90]} ${numbers[dig]}`

        }
      return result;
    }
    if (arrayOfNumber.length === 3) {
        let hundred = Math.floor(number / 100);
        let strHundred = `${numbers[hundred]} ${numbers[100]}`;
        let dec = number % 100;
        if (dec === 0) {
            result = strHundred;
            
        }
        else {
            result = `${strHundred} ${decCount(dec)}`
            
        }


    }
    else if (arrayOfNumber.length === 2){
       result=decCount(dec);
      
    }
    else if (arrayOfNumber.length === 1){
        result= numbers[number];
       
     }
    else if (arrayOfNumber.length === 1){
        result= numbers[number];
        
     } 
     result === '' ? result = 'zero' : result;
    return result.trim();
}
