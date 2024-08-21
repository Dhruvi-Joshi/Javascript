// 1. redeclaration variable 

var a=5

var a=90   //redeclaration of variable

console.log(a)

//2. access a variable out from block (var keyword is not blocked scoped they are functional scope)

if(a===90){
    var b =22
    console.log(b)
}

console.log(b)  //it's print so it is blocked scoped

function test(){
    var c=100
    console.log(c)
}

test()
// console.log(c)  //its show error becayse its functional scope