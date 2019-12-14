var myName = "Mirko";
var age= 24;

function ageDiff (x){
    return 32-x;
}

function older(x){
    if(x>21){
        console.log("You are older than 21");
    }else{
        console.log("You are not older than 21");
    }
}

function ignasi(x){
    if(x>18){
        console.log("Ignasi is younger than you");
    }else{
        if(x==18){
            console.log("You have the same age as Ignasi");
        }else{
            console.log("Ignasi is older than you")
        }
    }
}

console.log(myName);
console.log(age);
console.log(ageDiff(age));
older(age);
ignasi(age);    
