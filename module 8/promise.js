//how to produce promise 

let mypromise = new Promise(function(resolve , reject){
    const a=4
    const b=14

    setTimeout(() => {
        if(a===b){
            resolve('the values are equal')
        }
        else{
            reject('the values are not equal')
        }
        
    }, 2000);
})

// console.log(mypromise)  //panding stage

//fulfilled - then method
//consuming your promise
mypromise.then(function(result){   //result means value which is in resolve() ,it is only for resolve not rehect()  //reject show error
    console.log(result)
})//fulfill state

mypromise.catch(function(err){   //err means value which is in reject()
    console.log(err)
})//rejected state


//your promise will get setlled