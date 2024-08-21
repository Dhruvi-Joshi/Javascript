//synchronously

let fs = require('fs')

// console.log('first line')

// let data= fs.readFileSync('fun.txt')
// console.log('file data ->'+data)

// let data2= fs.readFileSync('fun2.txt')
// console.log('file data ->'+data2)

// console.log('last line')


//asynchronously

console.log('first line')


//cb:call back
//random order
fs.readFile('fun.txt',cb1)  //paraller order

function cb1(err,data){
    if(err){
        console.log('error')
    }
    console.log('file 1 data ->'+data)
    fs.readFile('fun2.txt',cb2)   //serial order
}

// fs.readFile('fun2.txt',cb2)  //paraller order

function cb2(err,data){
    if(err){
        console.log('error')
    }
    console.log('file 2 data ->'+data)
    fs.readFile('fun3.txt',cb3)  //serial order
} 

// fs.readFile('fun3.txt',cb3)  //paraller order

function cb3(err,data){
    if(err){
        console.log('error')
    }
    console.log('file 3 data ->'+data)
}


console.log('last line')