//lecsikal scope: function defind inside function always acess to its outer scope 

// function test(){
//     let a=2

//     function test1(){
//         console.log(a)  //it acess 
//     }

//     return test1
// }

// let fun = test()
// console.log(fun)
// fun()

function greet(){
    let name= 'steve'
    function displayname(){
        console.log('hii '+name)

        let age =32
        function displayage(){
            console.log('age is '+age + " "+name)   //outer scope
        }
        return displayage
    }
    return displayname
}

let g1=new greet()
console.log(g1)

g1()  //display name

let g2 = g1()

console.log(g2)

g2()  //display age

