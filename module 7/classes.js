class person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`welcome ${this.name}`)
    }
}

let person1=new person('abc',34)
person1.welcome()
let person2=new person('jkl',32)
let person3=new person('yui',33)

console.log(person1)
console.log(person2)
console.log(person3)