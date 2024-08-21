//hinding your data
//not allow to acess the data or method outside environment 

function person(_name,_age){
    this.name=_name  // so avoid this type of access  //do
    var age=_age

    this.getAge=function(){
        return age
    }
}

let person1=new person('om',34)
person1.name='jay'     //it is possible  //access to perticular object & change values
console.log(person1)

// so avoid this type of access


//now output show function and to get age
person1.age=90  //this is now not possible  //not ahow error
console.log(person1.getAge())