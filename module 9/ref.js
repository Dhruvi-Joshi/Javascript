let firstperson={
    name: 'steve',
    age: 23
}

let secondperson =firstperson

firstperson.name = 'jay'   //both change
console.log(firstperson)
console.log(secondperson)

//not copy bcz it use pointer
//to copy :1.shallow copy  2.deep copy