function factorial (number){

    let factorial =1;
    for(var i=1;i<=number;i++){
        factorial =factorial * i;
    }
    return factorial;
}

var result =factorial(12);
//console.log(result);


//recursive way
function factorial(no){

    if(no== 0){
        return 1
    }else{
        return no*factorial(no-1);
    }
}

var ans =factorial(8);
console.log(ans);