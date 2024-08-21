let arr=[
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"C",age:24,gender:"F"},
    {name:"D",age:44,gender:"F"},
    {name:"E",age:44,gender:"M"},
    {name:"I",age:28,gender:"F"},
    {name:"G",age:36,gender:"M"},
    {name:"H",age:47,gender:"F"},
]

//age of all the men

// let males=arr.filter(function(obj){
//     return obj.gender == 'M'
// })
// console.log(males)

// let ageofmen=males.map(function(male){
//     return male.age
// })
// console.log(ageofmen)

let males=arr.filter(function(obj){
        return obj.gender == 'M'
    }).map(function(male){
            return male.age
    })

console.log(males)


//from  the transaction array filter out the positive elements and calculator total amount

const transaction=[1000,3000,4000,2000,-898,3800,-4500]

let positiveadd=transaction.filter(function(n){
    return n>0
}).reduce(function(acc,add){
    let answer=acc+add
    return answer
},1)

console.log(positiveadd)