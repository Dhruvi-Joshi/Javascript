//whenever you create obj the prototype object always linked to that perticular object
let myobj={}

console.log(myobj)  //give empty object but also give prototype object

//1. 
let person={
    name:'abc',
    age:23,
}
console.log(person)  //gives naem,age and also prototype object inside have methods

console.log(person.hasOwnProperty('name'))   //true 


//constructor fn
//when constuctor function created object that have prototype and inside prototype you gatting another prototype which have all methods

function person1(_name,_age){
    this.name=_name
    this.age=_age
}

let person2=new person1('maharsh',20)
// ex2
console.log(person2)

//1. only object create:  1 prototype object which have pre defind methods ex1

//2. object created for any function : prototype object have prototype object
                                        // 1. prototype have constroctor obj (ex: person1)
                                        //2. pre defind method
                                        // ex2