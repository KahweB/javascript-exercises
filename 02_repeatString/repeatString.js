const repeatString = function(word, ntime) {
    let output = "";
    if (ntime < 0 ){
        return "ERROR";
    }
    for(let i = 0; i < ntime; i++){
        output += word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
