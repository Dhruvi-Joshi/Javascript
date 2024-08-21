//higher order function

//simply
let arr=[1,2,3,4,5]
let squarr=[]
for(i=0;i<arr.length;i++){
    squarr.push(arr[i]*arr[i])
}
console.log(squarr)

//map  :will loop through every element of your array and will perform specific opration that have provided
//      method always return you a new array with your result 

let num=[1,2,3,4,5]
let squnum= num.map(function(n){
    return n*n
})

console.log(squnum)


const transaction=[1000,3000,4000,2000,-898,3800,-4500]
const intodollar=80
let change = transaction.map((n)=>{
    // return n/intodollar
    return (n/intodollar).toFixed(0)
})

// let change = transaction.map(function(n){
//     return n/intodollar
// })
console.log(change)


//foreach:  in foreach no return is work  its so undefind

let changess = transaction.forEach((n)=>{
    // return n/intodollar
    // return (n/intodollar).toFixed(0)   //its show undefind
    console.log((n/intodollar).toFixed(0))   //its give value not array
})
console.log(changess)