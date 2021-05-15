// check depth area wise person
function people(depth){

    var man =0;
    if(depth<=10){
        man=depth * 50;
    }
    else if(depth<=20){
        var firstArea = 10*50;
        var remaining = depth -10;
        var secondArea = remaining *100;
        var man =firstArea +secondArea;
    }
    else{
        var firstArea  =10*50;
        var secondArea =10 *100;
        var remaining =depth - 20;
        var thirdArea = remaining * 200;
        var man = firstArea = secondArea +thirdArea
    }
    return man;
}

var result =people(12);
console.log('result',result);