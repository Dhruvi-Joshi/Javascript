// non strict & vscode


//console.log
console.log(this) //empty object


//function
function thisdisplay(){
    console.log(this)    //global object:which hold all type of methods in node.js 
}
thisdisplay()


//object->function
let myobj={
    name:'dhruvi',
    age:23,
    myfu:function(){     //when object have function then it's call "method"
        console.log(this)
        console.log(this.name)
    }
}
myobj.myfu()   //it's give object itself


//object->fun->fun

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
myobj1.myfu1()   //it's return global object