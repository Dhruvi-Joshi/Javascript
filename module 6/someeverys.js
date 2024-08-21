//some method :return boolean value(true/false)
//             it will return true if even 1 or more than 1 element satisfies the condition
//             only give true and false

const transaction=[-1000,-3000,-4000,-2000,-898,-3800,-4500]

let result= transaction.some(function(n){
    return n>0
})

console.log(result)



//every method :return boolean value(true/false)
//             it will return true if every element satisfies the condition
//             only give true and false

let every=transaction.every(function(n){
    return n<0
})

console.log(every)