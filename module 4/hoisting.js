// hoisting is allow you to move your declaration on top

console.log(a)
greet()

// add(2,4) //error
var a="hii"  //if i remove this line than i have error but it's not remove than show undefind

function greet(){
    console.log("hello")
}

//if function as a variable expresion (function expression)than its show error

var add=function(a,b){
    console.log(a+b)
}
add(2,4)