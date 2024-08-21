function placeorder(drink){
    return new Promise(function(resolve , reject){
        if(drink === 'coffee'){
            resolve('order for coffee recieved')
        }
        else{
            reject('other orders rejected')
        }
    })
}

function processorder(order){
    return new Promise(function(resolve){
        console.log("order is being processed")
        resolve(`${order} and is served`)
    })
}

// placeorder('coffee').then(function(orderplace){
//     console.log(orderplace)        //order for coffee recieved
//     let orderisprocessed=processorder(orderplace)
//     return orderisprocessed    //order is being processed
// }).then(function(processorder){
//     console.log(processorder)   //order for coffee and recieved is served
// }).catch(function(err){
//     console.log(err)
// })   //call chaining of promise  //solution with promise


//async wait =keywords
//async ->alway write to function

async function serveorder() {

    try{
    let orderplaced = await placeorder('coffee')
    console.log(orderplaced)
    let processedorder = await processorder(orderplaced) 
    console.log(processedorder)
    }catch(error){
        console.log(error)
    }
}
serveorder()