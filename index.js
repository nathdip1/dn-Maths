const dnMaths = {
    fact: function (num){
        if(typeof num !== 'number' || num<0 || !Number.isInteger(num))
            return undefined;
        if(num === 0)
            return 1;
        return num*dnMaths.fact(num-1);
        },
    randomdigit: function generateRandomDigit(num) {
            const minDigitRequired = 10**(num-1);
            const now = Date.now();
            const microTime = performance.now();
            let randomValue =((((now ^ microTime) >>> 0)*now)%minDigitRequired)
            while(randomValue<minDigitRequired){
                randomValue = randomValue + minDigitRequired;
            }
            return randomValue;
        }
    };

module.exports = dnMaths;
