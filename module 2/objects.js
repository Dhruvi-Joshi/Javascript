//in js objects are in key value pair

// var person={
//     name: 'maharsh',
//     surname: "joshi",
//     age:15,
//     carowner: true
// }

// console.log(person)

// //dot notation

// console.log(person.age)

// //bracket notation

// console.log(person['surname'])

var cap={
    name: 'maharsh',
    surname : 'joshi',
    age: 15,
    isAvanger : true,
    friend : ['purvraj','jay','nishit'],
    address :{
        state : 'gujarat',
        city :{
            name : 'jamnagar',
            pincode : 361008
        }
    }
}

console.log(cap.friend[2])

console.log(cap.address.city.name)

cap.isAvanger =false


cap.movies=['RRR','life of pi']


delete cap.isAvanger
console.log(cap)
