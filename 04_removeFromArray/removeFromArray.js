const removeFromArray = function(array,...args) {
    //cikarilacak sayilari indexof a koy splice et ne kadar arguman konulduysa
    // o kadar loopla (sadece 1 item splice edilecek)
    
    for (let i=0; i <= args.length -1 ;i++){
        if(typeof array[array.indexOf(args[i])] === typeof args[i]){
            array.splice(array.indexOf(args[i]),1);
        }
        else{
            continue;
        }
    };  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
