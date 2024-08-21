// curring is a function to transfer your function to a multiplal argument to small function (single argument)


let sum=function(x,y){
    console.log(x+y)
}

let sumcurried=function(x){
    return function(y){
        console.log(x+y)
    }
}

let sumtwono=sumcurried(2)
sumtwono(3)
// console.log(sumtwono)