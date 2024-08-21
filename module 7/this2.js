// strict & vscode
'use strict'

//1.console.log

console.log(this)   //empty obj

//2. function

function this2(){
    console.log(this)
}
this2()       //undefinded


//3. object->function
let myobj={
    name:'dhruvi',
    age:23,
    myfu:function(){     //when object have function then it's call "method"
        console.log(this)
        console.log(this.name)
    }
}
myobj.myfu()   //it's give object itself 

//4. object->fun->fun

let myobj1={
    name:'dhruvi',
    age:23,
    myfu1:function(){     //when object have function then it's call "method"
        function myfun2(){
            console.log(this)
        }
        myfun2()
    }
}
myobj1.myfu1()   //it's return undefined