// let person={
//     firstname:'abc',
//     lastname:'shah',
//     age:45,
//     printdetails: function(){
//         console.log(`hi i am ${this.firstname} ${this.lastname} and i am ${this.age} year old`)
//     }

// }

// let person2={
//     firstname:'pqr',
//     lastname:'modi',
//     age:34,
//     printdetails: function(){
//         console.log(`hi i am ${this.firstname} ${this.lastname} and i am ${this.age} year old`)
//     }
// }

// person.printdetails()
// person2.printdetails()

//call

// let person={
//     firstname:'abc',
//     lastname:'shah',
//     age:45,
//     printdetails: function(){
//         console.log(`hi i am ${this.firstname} ${this.lastname} and i am ${this.age} year old`)
//     }

// }

// let person2={
//     firstname:'pqr',
//     lastname:'modi',
//     age:34,
//     printdetails: function(){
//         console.log(`hi i am ${this.firstname} ${this.lastname} and i am ${this.age} year old`)
//     }
// }

// person.printdetails.call(person2)

// &&

let person={
    firstname:'abc',
    lastname:'shah',
    age:45,
}

let printdetails= function(city,teacher){
    console.log(`hi i am ${this.firstname} ${this.lastname} and i am ${this.age} year old and i am from ${city}
i am ${teacher}`)
}

let person2={
    firstname:'pqr',
    lastname:'modi',
    age:34,
}

// printdetails.call(person)
printdetails.call(person,'rajkot','teacher')   //pass agrgument directly

//apply

printdetails.apply(person,['rajkot','teacher'])  //pass argument as array
// printdetails.apply(person,'rajkot','teacher')  //in apply not array arg. than show error

//bind method :which allows you to store your function and call it leter
//adv: allow you to store function in diff varible so you call it leter
let myfun =printdetails.bind(person,'rajkot','teacher') 
console.log(myfun) //[function: bound printdetails]
myfun()//call