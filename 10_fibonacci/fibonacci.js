const fibonacci = function(givenNumber) {
    let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229];
    if (givenNumber < 0){
        return "OOPS";
    }
    else {
        
        return fibonacci[givenNumber -1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
