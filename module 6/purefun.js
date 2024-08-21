var a=10  //external fector
//var a=9 //its change output
//input is same but output is changed bcz it is external fector which change by us 

function sum(x){
    console.log(x+a)
}
sum(2)

//same as if

function add(x){
    console.log(x+a)
    a++
}
add(2)
add(2)
add(2)
add(2)
//all of this also give different output 

//all this dependens to a so it is "impure function"
/////pure function ::same input have same output

//for pure function:

//1.do not use any external fector

function pureadd(p,q){
    console.log(p+q)  //external resource : fun work is add only not use other so its exter
}

pureadd(2,7)
pureadd(2,7)
pureadd(2,7)
pureadd(2,7)


//side effects

// 1. external resource

//this is complete pure function
function pureadd(p,q){
    return a+x    
}

console.log(pureadd(2,7))  //its print outside so now this function is pure fun(its not dependend to any external resource or fector)