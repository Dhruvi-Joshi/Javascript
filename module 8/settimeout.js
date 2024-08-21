//settimeout(cb,2000)


console.log('before')
function greet(){
    console.log('hello')
}

setTimeout(greet,2000)  //show after 2 sec

console.log('after')