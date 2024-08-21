//1.solution of redeclaration problem
var a=20
var a=22
let b=40

// let b=90   //its called redeclaration its not allowed
b=90    //its called re assigned its valid
// let b=42  //this shows error

console.log(a)
console.log(b)

//2. let keyword is blocked scoped

if(true){
    let c=10
    console.log(c)
}
// console.log(c)   //its show error