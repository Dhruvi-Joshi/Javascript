let test1=function(){
    console.log(1)
}

let test2=function(a){
    console.log(a+2)
}

let test3=function(a,b){
    console.log(a+b)
}

test1()
test2(4)
test3(6,4)

let test11= ()=>{
    console.log(1)
}

let test12= (a)=>{
    console.log(a+2)
}
// also
// let test12= a=>{
//     console.log(a+2)
// }

//also
// let test12= a=>console.log(a+2)

let test13= (a,b)=>{
    console.log(a+b)
}
test11()
test12(4)
test13(6,4)