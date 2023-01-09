const sumAll = function(numberOne,numberTwo) {
    let sumOfAll = 0;
    if((numberOne > 0 && numberTwo > 0)&&(typeof numberOne === typeof numberTwo)){
        if(numberOne < numberTwo){
            for(let i= numberOne; i<=numberTwo;i++){
                sumOfAll += i;
            }
        return sumOfAll;
        }
        else{
            for(let i= numberTwo; i<=numberOne;i++){
                sumOfAll += i;
            }
        return sumOfAll;
        }
    }
    else{
        return "ERROR"
    }
};
sumAll();
// Do not edit below this line
module.exports = sumAll;
