let firstperson={
    name:'jay',
    age:34,
    address:{
        city:"rajkot",
        state:"gujarat"
    }
}

let secondperson=JSON.parse(JSON.stringify(firstperson))  //deep copy

secondperson.name='steve'
secondperson.address.city='surat'   //both the properties same
console.log(firstperson)
console.log(secondperson)