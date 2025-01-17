const dnMaths = {
    fact: function (num){
    if(typeof num !== 'number' || num<0 || !Number.isInteger(num))
        return undefined;
    if(num === 0)
        return 1;
    return num*dnMaths.fact(num-1);
    }
};

module.exports = dnMaths;
