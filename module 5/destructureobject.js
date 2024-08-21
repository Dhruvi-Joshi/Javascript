let obj={
    name : 'joy',
    age : 80,
    gender: 'm',
    add : {city:'jamnagar',country :'india'}

}

let{name,age,add}=obj

console.log(name)
console.log(age)
console.log(add)

//alter name
let{name:a,age:b,gender:c,add:{city:x,country:y}}=obj

console.log(a)
console.log(b)
console.log(c)
console.log(x)
console.log(y)