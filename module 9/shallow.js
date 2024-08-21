// spread operator {...}


let firstperson={
    name:'jay',
    age:34,
    address:{
        city:"rajkot",
        state:"gujarat"
    }
}

let secondperson={...firstperson} //properties  //shallow copy

secondperson.name='steve'
secondperson.address.city='surat'   //both the properties same
console.log(firstperson)
console.log(secondperson)

//to sloution deep copy