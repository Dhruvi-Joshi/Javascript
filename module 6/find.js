//find returns the first element of an array that satisfy the condition 

const transaction=[1000,3000,4000,2000,-898,3800,-4500]

let firstwithdrawl= transaction.find(function(n){
    return n < 0
})
console.log(firstwithdrawl)


//find index
let firstwithdrawlindex= transaction.findIndex(function(n){
    return n < 0
})
console.log(firstwithdrawlindex)