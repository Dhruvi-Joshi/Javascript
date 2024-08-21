// function person(_name,_age){
//     this.name=_name
//     this.age = _age


//     //if we create function here than we dont folow rule which is don't repeate 
//     //this function repeate when new object is create
//     this.getnameandage =function(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }

// let person1 = new person('abc',45)
// console.log(person1)

// let person2 = new person('xyz',23)
// console.log(person2)


// ex: if that have person 1 : name,age,fun()
                    // person 2 :name,age,fun()
                    // name &ang is diff but fun is same
                    //so you don"t follow dry rule :"don't repeate code...  "
                    
                    
                    //solution: how can we put function in prototype

// solution:

function person(_name,_age){
    this.name=_name
    this.age = _age
}

person.prototype.getnameandage =function(){
            console.log(`I am ${this.name} and my age is ${this.age}`)
        }
let person1 = new person('abc',45)
console.log(person1.getnameandage())

let person2 = new person('xyz',23)
console.log(person2)
