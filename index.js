const dnMaths = {
    fact: function (num){
        if(typeof num !== 'number' || num<0 || !Number.isInteger(num))
            return undefined;
        if(num === 0)
            return 1;
        return num*dnMaths.fact(num-1);
        },

    randomdigit: function (num){
        const minDigitRequired = 10**(num-1);
        const now = Date.now();
        const microTime = performance.now();
        let randomValue =((((now ^ microTime) >>> 0)*now)%minDigitRequired)
        while(randomValue<minDigitRequired){
            randomValue = randomValue + minDigitRequired;
            }
        return randomValue;
        },

    seriesSum: function (num){
        let sum = 0;
        for(let i=1; i<=num; i++)
            sum += i;
        return sum;
        },

    seriesProduct: function (num){
        let product = 1;
        for(let i=1; i<=num; i++)
            product *= i;
        return product;
        },

    isPrime: function (num){
        if(num===0||num===1 || num<0)
            console.log("Error: Test a number GT 1");
        else{
            for(let i=2; i<=Math.sqrt(num); i++){
                if(num%i===0)
                    return false;
                else
                    return true;  
                }
            }
        }
    };

module.exports = dnMaths;
