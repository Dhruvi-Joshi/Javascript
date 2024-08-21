// imperative vs declarative

//we will be given a number and we have to check that if the squere of that no is even or not

//imperative way 

const a=5
const asquare=a*a
let iseven

if(asquare % 2 == 0){
    iseven =true
}
else{
    iseven = false
}

console.log(iseven)

//declarative way

const checkeven =(x) =>(x*x %2==0?true:false)
console.log(checkeven(5))