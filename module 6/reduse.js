//you need some of every element of array

let number=[3,6,5,7,10]
let sum=0  //accumlator

for(let i=0;i<number.length;i++){
    sum +=number[i]
}

console.log(sum)

//reduse method: it gives single result not array

let result= number.reduce(function(acc,value){
    let updatesum=acc+value
    return updatesum
},0)

console.log(result)


let multiplication=number.reduce(function(acc,value){
    let updateproduct=acc*value
    return updateproduct
},1)

console.log(multiplication)

