class person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`welcome ${this.name}`)
    }
}

class teacher extends person{
    constructor(_name,_age,_classstrength){
        super(_name , _age)
        this.classstength=_classstrength
    }

    test(){
        super.welcome()   //inherit method
    }
}

class student extends person{
    constructor(_name,_age,_cgpi){
        super(_name , _age)
        this.cgpi=_cgpi
    }
}

let person1=new person('abc',34)
person1.welcome()
console.log(person1)

let teacher1=new teacher('bob',39,89)
teacher1.test()
console.log(teacher1)

let student1=new student('joy',22,7.90)
console.log(student1)