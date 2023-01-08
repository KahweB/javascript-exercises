const reverseString = function(normalString) {
    let reversedString = ""
    for(let i = (normalString.length)-1; i >= 0; i--){
        reversedString += normalString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
