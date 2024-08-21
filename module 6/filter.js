//you have to check for even no in an array and put them in a separate array

let number=[12,16,45,87,32,87,23]
let evenarr =[]

for(let i=0;i<number.length;i++){
    if(number[i]%2 == 0)
    {
        evenarr.push(number[i])
    }
}
console.log(evenarr)

//filter method:  filter returns a new array it will return all those elements that match a specific condition
//                if condition is true it will return the element for that condition and if it is false itwill discard that

let filtervalue=number.filter(function(n){
    return n%2 ==0
})
console.log(filtervalue)


const transaction=[-1000,-3000,4000,-2000,898,-3800,4500]

let result= transaction.filter(function(n){
    return n>0
})

console.log(result)
