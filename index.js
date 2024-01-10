function receivesAFunction (callBack){
    callBack();
    console.log(callBack()); 
}

receivesAFunction(function(){return 'This stores something into "callback."'});


function returnsANamedFunction (){
    return receivesAFunction;
}


function returnsAnAnonymousFunction(){
    return function(){};
}



