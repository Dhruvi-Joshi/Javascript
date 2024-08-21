function printfirstname(firstname){
    console.log(firstname)
}

function printlastname(lastname){
    console.log(lastname)
}

printfirstname('dhruvi')
printlastname('joshi')

//callback

function firstname(firstname,cd){
    console.log(firstname)
    cd('joshi')
}

function lastname(lastname){
    console.log(lastname)
}

firstname('dhruvi',lastname)

//application of callback

const iseven = (n)=>{
    return n%2==0

}

let printresult = (fun,value)=>{
     const isnum=fun(value)

     console.log(`the number ${value} is an even number: ${isnum}`)
}

printresult(iseven,12)


//call back fun pass to other fun
//higher order receive the function